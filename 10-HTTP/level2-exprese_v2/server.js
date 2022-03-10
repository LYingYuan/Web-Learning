const express = require("express");
const path = require("path");
const user_router = require("./router");

const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use(user_router);

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
