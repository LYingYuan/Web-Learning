const express = require("express");
const path = require("path");
const app = new express();

app.use(express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "static", "pages")));

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
