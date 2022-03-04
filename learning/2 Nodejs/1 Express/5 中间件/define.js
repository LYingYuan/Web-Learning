const express = require("express");
const app = express();

// mv:midule value
const mv = (req,res,next)=>{
    console.log("这是一个最简单的中间件函数");
    // 注意：在当前中间件的业务处理完毕后，必须调用 next()函数
    // 表示把流转关系交给下一个中间件或路由
    // 路由和中间件的区别：路由的形参里没有next
    next();
}

app.use(mv);

app.get("/", (req, res) => {
    res.send("hello1");
});
app.post("/", (req, res) => {
    res.send("hello2");
});

app.listen(80,()=>{
    console.log("server is running at http://127.0.0.1");
})