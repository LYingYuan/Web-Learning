const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./jwt");

router.get("/", loginRouter);
router.get("/login", loginRouter);
router.get("/sign", signRouter);

router.post("/login", login);
router.post("/", login);
router.post("/sign", sign);

let user_data = {};

function loginRouter(req, res) {
    // 验证token
    res.sendFile(path.join(__dirname, "static", "pages", "login.html"));
}

function signRouter(req, res) {
    res.sendFile(path.join(__dirname, "static", "pages", "sign.html"));
}

function login(req, res) {
    req.on("data", (data) => {
        const post_data = JSON.parse(data.toString());
        if (!user_data[post_data.user]) {
            res.send({ OK: false, message: "用户不存在" });
        } else {
            if (user_data[post_data.user] === post_data.password) {
                // 创建一个token
                const token = auth.generateToken({ username: post_data.user });
                console.log(`创建了一个token：${token}`);
                res.send({ OK: true, message: "登陆成功", data: { token } });
            } else {
                res.send({ OK: false, message: "登陆失败" });
            }
        }
    });
}

function sign(req, res) {
    req.on("data", (data) => {
        const post_data = JSON.parse(data.toString());
        if (user_data[post_data.user]) {
            res.send({ OK: false, message: "该用户已注册" });
        } else {
            user_data[post_data.user] = post_data.password;
            res.send({ OK: true, message: "注册成功" });
        }
    });
}

module.exports = router;
