const express = require("express");
const path = require("path");
const user_router = require("./router");

const app = new express();

// 静态资源
app.use(express.static(path.join(__dirname, static)));

app.listen(80, () => {
    console.log("Server is running at http:127.0.0.1:80");
});
