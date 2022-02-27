const http = require("http");
const fs = require("fs");
const path = require("path");

// 创建服务器
const server = http.createServer();
server.on("request", (req, res) => {
    const url = req.url;
    // const fpath = path.join(__dirname, url);
    let fpath = "";
    if (url === "/") {
        fpath = path.join(__dirname, "index.html");
    } else {
        fpath = path.join(__dirname, url);
    }
    fs.readFile(fpath, "utf-8", (err, data) => {
        if (err) {
            return console.log("读取文件失败" + err.message);
        }
        // res.setHeader("Content-Type", "text/plain; charset=utf-8")
        res.end(data);
    });
});

server.listen(80, () => {
    console.log("server listen at http://127.0.0.1");
});
