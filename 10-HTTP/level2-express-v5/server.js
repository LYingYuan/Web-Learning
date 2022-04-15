const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const login_router = require("./router");
const user_router = require("./userRouter");

const app = new express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // console.log(`请求头中 :${JSON.stringify(req.headers)}`);
  next();
};
app.use(logger);

// 静态资源
app.use(express.static(path.join(__dirname, "static")));

// 解析请求内容
// json请求
app.use(bodyParser.urlencoded({ extended: false }));
// form请求
app.use(bodyParser.json());

// 路由
app.use(login_router);
// app.use(auth.verifyToken); // token验证
app.use(user_router);

app.listen(80, () => {
  console.log("Server is running at http://127.0.0.1:80");
});
