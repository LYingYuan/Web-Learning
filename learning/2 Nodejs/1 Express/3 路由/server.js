const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/", (req, res) => {
    res.send("Got a POST request");
});

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
