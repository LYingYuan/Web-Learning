const express = require("express");
const path = require("path");

const app = express();

app.use("/public", express.static(path.join(__dirname, "test")));

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
