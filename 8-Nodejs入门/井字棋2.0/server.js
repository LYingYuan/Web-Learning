// 实现功能
// 利用node.js实现局域网井字棋对战

const fs = require("fs");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

let users = [];
app.use(express.static("node_modules"));

io.on("connection", (socket) => {
    console.log(`${socket.id}用户连接了`);
    //用户链接后将用户id添加到users里面
    users.push(socket.id);
    console.log(`当前链接用户：${users}`);
    //获取我方id
    socket.on("getSocketId", (data) => {
        io.to(socket.id).emit("socketId", socket.id);
        if (users.length % 2 === 0) {
            io.to(users[users.length - 2]).emit("enemyId", socket.id);
        } else {
            io.to(socket.id).emit("socketId", socket.id);
            io.to(socket.id).emit("enemyId", users[users.length - 2] || null);
        }
    });
    //获取对手id
    socket.on("getEnemyId", (data) => {
        if (users.length % 2 === 0) {
            io.to(users[users.length - 2]).emit("enemyId", socket.id);
            io.to(socket.id).emit("enemyId", users[users.length - 2]);
        } else {
            io.to(socket.id).emit("enemyId", users[users.length - 2] || null);
        }
    });

    // 落子：socketId---谁的回合
    socket.on("putChess", (data) => {
        console.log(data);
        const { socketId, enemyId } = data;
        //向双方发送当前落子的信息
        io.to(socketId).emit("getChess", data);
        io.to(enemyId).emit("getChess", data);
    });

    //获取谁是先手
    socket.on("getWhoFirst", (data) => {
        io.to(socket.id).emit("whoFirst", users[0]);
    });
    //游戏结束
    socket.on("gameOver", (data) => {
        users = [];
    });
});

// 监听连接断开事件
io.on("disconnect", (socket) => {
    users.slice(users.indexOf(socket.id), 1);
    console.log(`${socket.id}的连接已断开...`);
});

server.listen(port);
