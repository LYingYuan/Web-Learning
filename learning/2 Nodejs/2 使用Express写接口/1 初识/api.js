const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    // 调用 res.send() 方法，向客户端响应数据
    res.send({
        status: 0, // 0表示处理成功，1表示处理失败
        msg: "GET请求成功",
        data: query, // 需要响应给客户端的数据
    });
});

router.post("/post", (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: "POST请求成功",
        data: body,
    });
});

module.exports = router;
