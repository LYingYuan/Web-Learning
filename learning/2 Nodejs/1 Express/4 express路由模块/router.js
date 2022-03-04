const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello1");
});
router.post("/", (req, res) => {
    res.send("hello2");
});

module.exports = router;
