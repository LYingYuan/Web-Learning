const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("hello");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("world");
});

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
