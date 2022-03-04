const express = require("express");
const my_router = require("./api");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(my_router);

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
