// A server for a multi-player tic tac toe game. Loosely based on an example in
// Deitel and Deitel’s “Java How to Program” book. For this project I created a
// new application-level protocol called TTTP (for Tic Tac Toe Protocol), which
// is entirely plain text. The messages of TTTP are:
//
// Client -> Server
//     MOVE <n>
//     QUIT
//
// Server -> Client
//     WELCOME <char>
//     VALID_MOVE
//     OTHER_PLAYER_MOVED <n>
//     OTHER_PLAYER_LEFT
//     VICTORY
//     DEFEAT
//     TIE
//     MESSAGE <text>

const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 58901 });

(() => {
    // When null, we are waiting for the first player to connect, after which we will
    // create a new game. After the second player connects, the game can be fully set
    // up and played, and this variable immediately set back to null so the future
    // connections make new games.
    let game = null;

    server.on("connection", (ws, req) => {
        console.log("Connection from", req.connection.remoteAddress);
        if (game === null) {
            game = new Game();
            game.playerX = new Player(game, ws, "X");
        } else {
            game.playerO = new Player(game, ws, "O");
            game = null;
        }
    });
    console.log("The Tic Tac Toe server is running...");
})();

class Game {
    // A board has nine squares. Each square is either unowned or it is owned by a
    // player. So we use a simple array of player references. If null, the corresponding
    // square is unowned, otherwise the array cell stores a reference to the player that
    // owns it.
    constructor() {
        this.board = Array(9).fill(null);
    }

    hasWinner() {
        const b = this.board;
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        return wins.some(
            ([x, y, z]) => b[x] != null && b[x] === b[y] && b[y] === b[z]
        );
    }

    boardFilledUp() {
        return this.board.every((square) => square !== null);
    }

    move(location, player) {
        if (player !== this.currentPlayer) {
            throw new Error("Not your turn");
        } else if (!player.opponent) {
            throw new Error("You don’t have an opponent yet");
        } else if (this.board[location] !== null) {
            throw new Error("Cell already occupied");
        }
        this.board[location] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer.opponent;
    }
}

class Player {
    constructor(game, socket, mark) {
        Object.assign(this, { game, socket, mark });
        this.send(`WELCOME ${mark}`);
        if (mark === "X") {
            game.currentPlayer = this;
            this.send("MESSAGE Waiting for opponent to connect");
        } else {
            this.opponent = game.playerX;
            this.opponent.opponent = this;
            this.send("MESSAGE Your opponent will move first");
            this.opponent.send("MESSAGE Your move");
        }

        socket.on("message", (buffer) => {
            const command = buffer.toString("utf-8").trim();
            console.log(`Received ${command}`);
            if (command === "QUIT") {
                socket.close();
            } else if (/^MOVE \d$/.test(command)) {
                const location = Number(command.substring(5));
                try {
                    game.move(location, this);
                    this.send(`VALID_MOVE ${location}`);
                    this.opponent.send(`OPPONENT_MOVED ${location}`);
                    if (this.game.hasWinner()) {
                        this.send("VICTORY");
                        this.opponent.send("DEFEAT");
                    } else if (this.game.boardFilledUp()) {
                        [this, this.opponent].forEach((p) => p.send("TIE"));
                    }
                } catch (e) {
                    console.trace(e);
                    this.send(`MESSAGE ${e.message}`);
                }
            }
        });

        socket.on("close", () => {
            try {
                this.opponent.send("OTHER_PLAYER_LEFT");
            } catch (e) {}
        });
    }

    send(message) {
        try {
            this.socket.send(`${message}\n`);
        } catch (e) {
            console.error(e);
        }
    }
}
