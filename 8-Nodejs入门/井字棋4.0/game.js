const game_squares = document.querySelectorAll(".cell");
const game_btn = {
    start: document.querySelector(".connect-btn"),
    end: document.querySelector(".disconnect-btn"),
};
const text_content = document.querySelector(".text-content");
const playChess = (location) => document.querySelector(`#chess${location}`);

game_btn.start.addEventListener("click", () => {
    joinGame();
});
game_btn.end.addEventListener("click", () => {
    leaveGame("溜了!");
});

let socket,
    mark,
    gameOver = false;

for (let i = 0, length = game_squares.length; i < length; i++) {
    game_squares[i].addEventListener("click", () => {
        socket.send(`MOVE ${i}`);
    });
}

function joinGame() {
    const host = "localhost";
    gameOver = false;
    socket = new WebSocket(`ws://${host}:58901`);
    socket.addEventListener("message", (event) => {
        processCommand(event.data);
    });
    game_squares.forEach((s) => (s.textContent = ""));
    game_btn.start.style.display = "none";
    game_btn.end.style.display = "flex";
    socket.onerror = () => leaveGame("Error: 与服务器断开");
}

function leaveGame(message) {
    text_content.textContent = message || "Game over";
    socket.send("QUIT");
    gameOver = true;
    game_btn.start.style.display = "flex";
    game_btn.end.style.display = "none";
}

//command.startsWith("")
function processCommand(command) {
    if (command.startsWith("WELCOME")) {
        // "WELCOME ${mark}"
        mark = command[8];
        opponentMark = mark == "X" ? "O" : "X";
    } else if (command.startsWith("VALID_MOVE")) {
        // `VALID_MOVE ${location}`
        playChess(command.substring(11)).textContent = mark;
        text_content.textContent = "对方正在思考";
    } else if (command.startsWith("OPPONENT_MOVED")) {
        playChess(command.substring(11)).textContent = opponentMark;
        text_content.textContent = "你的回合";
    } else if (command.startsWith("MESSAGE")) {
        text_content.textContent = command.substring(8);
    } else if (command.startsWith("VICTORY")) {
        leaveGame("你赢了！");
    } else if (command.startsWith("DEFEAT")) {
        leaveGame("再接再厉");
    } else if (command.startsWith("TIE")) {
        leaveGame("平局");
    } else if (command.startsWith("OTHER_PLAYER_LEFT")) {
        leaveGame(!gameOver ? "对方已离开" : "");
    }
}
