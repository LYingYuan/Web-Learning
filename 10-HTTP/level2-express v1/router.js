// 路由
const express = require("express");
const path = require("path");

const router = express.Router();

// 挂载路由
router.get("/", (req, res) => {
    res.render(path.join(__dirname, "static", "pages", "login.html"));
});

router.get("/login", (req, res) => {
    res.render(path.join(__dirname, "static", "pages", "login.html"));
});

module.exports = router;
