const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const user_router = require("./router");

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);

app.use(express.static(path.join(__dirname, "static")));
app.use(user_router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
