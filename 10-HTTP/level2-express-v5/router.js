const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", loginRouter);
router.get("/login", loginRouter);
router.get("/sign", signRouter);

router.post("/login", login);
router.post("/", login);
router.post("/sign", sign);

router.get("/index", indexRouter);

let user_data = {};

function loginRouter(req, res) {
    res.sendFile(path.join(__dirname, "static", "pages", "login.html"));
}

function signRouter(req, res) {
    res.sendFile(path.join(__dirname, "static", "pages", "sign.html"));
}

function login(req, res) {
    const post_data = req.body;
    if (!user_data[post_data.user]) {
        res.send({ OK: false, message: "用户不存在" });
    } else {
        if (user_data[post_data.user] === post_data.password) {
            // 创建一个cookie
            setCookie(res, post_data.user);
            res.send({ OK: true, message: "登陆成功" }); //, data: { token }
        } else {
            res.send({ OK: false, message: "登陆失败" });
        }
    }
    // console.log(`（登录）用户POST的数据：${JSON.stringify(post_data)}`);
    // console.log(`此时服务器保存的用户数据：${JSON.stringify(user_data)}`);
}

function sign(req, res) {
    const post_data = req.body;
    if (user_data[post_data.user]) {
        res.send({ OK: false, message: "该用户已注册" });
    } else {
        user_data[post_data.user] = post_data.password;
        res.send({ OK: true, message: "注册成功" });
    }
    // console.log(`（注册）用户POST的数据：${JSON.stringify(post_data)}`);
    // console.log(`服务器保存的用户数据：${JSON.stringify(user_data)}`);
}

module.exports = router;

// 新建cookie start
function setCookie(res, user) {
    res.setHeader(
        "Set-Cookie",
        `user=${user}; path=/; expires=${setCookieExpirationTime()}`
    );
}
// 新建cookie end

// 生成cookie有效时间 start
function setCookieExpirationTime() {
    // 10s有效
    const n = 30;
    const date = new Date();
    date.setSeconds(date.getSeconds() + n);
    return date.toUTCString();
}
// 生成cookie有效时间 end

// 解析cookie start
function parseCookie(req) {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return;
    }
    cookies.split(";").forEach((cookie) => {
        if (!cookie) {
            return "";
        }
        const arr = cookie.split("=");
        // const key = arr[0];
        const value = arr[1];
        req.user = value;
        // return value;
    });
}
// 解析cookie end

function indexRouter(req, res) {
    parseCookie(req);
    if (req.user && user_data.hasOwnProperty(req.user)) {
        res.sendFile(path.join(__dirname, "static", "pages", "index.html"));
    } else {
        res.send("Cookie过期，请重新登录");
    }
}
