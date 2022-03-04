const express = require("express");
const qs = require("querystring");
const app = express();

// 解析表单数据的中间件
app.use((req, res, next) => {
    let str = "";
    req.on("data", (chunk) => {
        str += chunk;
    });
    req.on("end", () => {
        const body = qs.parse(str);
        req.body = body;
        console.log(req.body);
        next();
    });
});

app.post("/", (req, res) => {
    res.send("world");
});

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
