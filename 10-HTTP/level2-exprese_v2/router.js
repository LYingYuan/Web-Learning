const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", loginRouter);
router.get("/login", loginRouter);
router.get("/sign", signRouter);
router.post("/login", loginPost);

function loginRouter(req, res) {
    // 验证token
    res.sendFile(path.join(__dirname, "static", "pages", "login.html"));
}

function signRouter(req, res) {
    res.sendFile(path.join(__dirname, "static", "pages", "sign.html"));
}

function loginPost(req, res) {
    console.log(req.user);
    res.send("hello");
}

function signPost(req, res) {
    console.log(req.user);
}

function searchUser() {}

module.exports = router;
