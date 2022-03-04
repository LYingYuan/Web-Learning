// 引入模块
const express = require("express");
// 创建 Web 服务器
const app = express();

// 监听并响应
app.get('/user',(req,res)=>{
    res.send({name:'lyy',age:20,gender:'女'});
})

app.post("/user",(req,res)=>{
    res.send("请求成功");
})

// 调用 app.listen(端口号，回调函数)，启动服务器
app.listen(80, () => {
    console.log("express server running at http://127.0.0.01");
});
