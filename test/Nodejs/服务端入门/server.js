const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{
    const url = req.url;
    const method = req.method;
    const str = `客户端使用 ${method} 方法请求 ${url}`;
    console.log(str);
    // todo 出现乱码添加了下面这条语句
    // Content-Type 告诉浏览器以什么样的方式来解析
    res.setHeader("Content-Type","text/plain; charset=utf-8");
    // 调用res.end()
    res.end(str);
})
server.listen(80,()=>{
    console.log(`server running at http://127.0.0.1`);
})