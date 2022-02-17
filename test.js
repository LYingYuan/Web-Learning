var users = {};
io.on("connection", function (socket) {
    io.sockets.emit("connect", { con: "connected" });
    socket.on("location", function (from, to, msg) {
        if (to in users) {
            //console.log('to'+to+'   '+msg);
            users[to].emit("to" + to, msg);
        }
    });
    socket.on("newUser", function (user) {
        if (user in users) {
            socket.emit("exist", {});
        } else {
            users[user] = socket;
            if (users["u2"]) {
                io.sockets.emit("stateok", {});
            }
        }
    });
    socket.on(".disconnect-btn", function () {
        socket.emit("disconnection");
    });
});
