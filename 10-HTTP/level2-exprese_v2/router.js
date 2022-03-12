const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", loginRouter);
router.get("/login", loginRouter);
router.get("/sign", signRouter);
router.post("/", loginPost);
router.post("/login", loginPost);
router.post("/sign", signPost);

function loginRouter(req, res) {
    // 验证token
    res.sendFile(path.join(__dirname, "static", "pages", "login.html"));
}

function signRouter(req, res) {
    res.sendFile(path.join(__dirname, "static", "pages", "sign.html"));
}

function loginPost(req, res) {
    req.on("data", function (data) {
        //利用data事件
        console.log(data.toString());
    });
    res.send("hello1");
}

function signPost(req, res) {
    console.log(req);
}

function searchUser() {}

module.exports = router;
