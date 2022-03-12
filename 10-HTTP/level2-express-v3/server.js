const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const user_router = require("./router");

const app = new express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);

// 静态资源
app.use(express.static(path.join(__dirname, "static")));

// 路由
app.use(user_router);

// 解析请求内容
// json请求
app.use(bodyParser.urlencoded({ extended: false }));
// form请求
app.use(bodyParser.json());

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1:80");
});

