const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/index", indexRouter);

function indexRouter(req, res) {
    res.sendFile(path.join(__dirname, "static", "pages", "index.html"));
}

module.exports = router;
