const express = require("express");
const app = express();

app.use((req, res, next) => {
    const time = Date.now();
    //
    req.start_time = time;
    next();
});

app.get("/", (req, res) => {
    res.send("hello1 " + req.start_time);
});
app.post("/", (req, res) => {
    res.send("hello2");
});

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
