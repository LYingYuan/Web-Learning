const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{
    const url = req.url;
    let content = `<h1>404 Not Found!</h1>`
    if(url === '/' || url === "/index.html"){
        content = `<h1>首页</h1>`;
    }else if(url === '/about.html'){
        content = `<h1>介绍页面</h1>`;
    }

    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.end(content);
})
server.listen(80);