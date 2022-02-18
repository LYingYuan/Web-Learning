const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 58901 });

(() => {
    let game = null;
    server.on("connection", (ws, req) => {
        if (game === null) {
            game = new Game();
            game.playerX = new Player(game, ws, "X");
        } else {
            game.playerO = new Player(game, ws, "O");
            game = null;
        }
    });
    console.log("井字棋服务器已经开始运行");
})();

class Game {
    // 游戏具有一个9宫格棋盘，将其看作一个整体使用数组存储各个格子状态
    // null表示暂无玩家落子，0、1分别表示玩家1、玩家2在该处已落子
    constructor() {
        this.board = Array(9).fill(null);
        // current_player 当前玩家
        // playerX
        // playerO
    }

    // 判断当前局面是否成为赢家
    isWinner() {
        const now_board = this.board;
        const win_cases = [
            // 行
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // 列
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // 对角线
            [0, 4, 8],
            [2, 4, 6],
        ];
        // 利用迭代函数some()判断是否出现赢家
        // some()函数：对数组中的每一项运行给定函数,如果该函数对任一项返回 true，则返回 true。
        return win_cases.some(
            ([x, y, z]) =>
                now_board[x] != null &&
                now_board[x] === now_board[y] &&
                now_board[y] === now_board[z]
        );
    }

    // 检查当前局面是否为平局
    isBoardFull() {
        // every()函数：对数组中的每一项运行给定函数,如果该函数对每一项都返回true,则返回true
        return this.board.every((square) => square != null);
    }

    // 下棋
    playChess(location, player) {
        if (player != this.current_player) {
            throw new Error("当前不是你的回合！");
        } else if (!player.opponent) {
            throw new Error("暂未匹配到对手！");
        } else if (this.board[location] != null) {
            throw new Error("已被落子！");
        }
        this.board[location] = this.current_player.mark;
        this.current_player = this.current_player.opponent;
        console.log(this.board);
    }
}

class Player {
    constructor(game, socket, mark) {
        // Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
        Object.assign(this, { game, socket, mark });
        // opponent 对手

        this.send(`WELCOME ${mark}`); //玩家加入游戏
        if (mark === "X") {
            game.current_player = this;
            this.send("MESSAGE 正在为您寻找对手");
        } else {
            this.opponent = game.playerX;
            this.opponent.opponent = this;
            this.send("MESSAGE 对方正在思考");
            this.opponent.send("MESSAGE 你的回合");
        }

        // 监听message事件
        socket.on("message", (buffer) => {
            const command = buffer.toString("utf-8").trim();
            console.log(`Received ${command}`);
            if (command == "QUIT") {
                socket.close();
            } else if (/^MOVE \d$/.test(command)) {
                const location = Number(command.substring(5));
                try {
                    game.playChess(location, this);
                    this.send(`VALID_MOVE ${location}`);
                    this.opponent.send(`OPPONENT_MOVE ${location}`);
                    if (this.game.isWinner()) {
                        this.send("VICTORY");
                        this.opponent.send("DEFEAT");
                    } else if (this.game.isBoardFull()) {
                        [this, this.opponent].forEach((player) =>
                            player.send("TIE")
                        );
                    }
                } catch (e) {
                    // console的trace()方法向Web控制台输出一个堆栈跟踪。
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
