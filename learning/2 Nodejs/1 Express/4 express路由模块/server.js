const express = require("express");
const uer_router = require("./router");

const app = express();
app.use(uer_router);

app.listen(3030, () => {
    console.log("server is running at http://127.0.0.1:3030");
});
