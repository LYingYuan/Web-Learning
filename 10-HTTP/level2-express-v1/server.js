// 服务器入口文件
const express = require("express");
const body_parser = require("body-parser");
const session = require("express-session");
const static_file = require("express-static");
const path = require("path");
const router = require("./router");

const app = new express();

let user = {};

// 静态资源
app.use(static_file(path.join(__dirname, "static")));

app.use(router);

app.listen(3000, () => {
    console.log("Server is running at http://127.0.0.1:3000");
});
