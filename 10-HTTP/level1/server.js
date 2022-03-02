const fs = require("fs");
const path = require("path");
const http = require("http");
// const url = require("url");
const querystring = require("querystring");

let users = {};

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(method, url);
    if (method === "GET") {
        if (url === "/" || url === "/login") {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile(
                path.join(__dirname, "static", "pages", "login.html"),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        } else if (url === "/sign") {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile(
                path.join(__dirname, "static", "pages", "sign.html"),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        } else if (url === "/favicon.ico") {
            res.end();
        } else if (url === "/index") {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile(
                path.join(__dirname, "static", "pages", "index.html"),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        } else {
            fs.readFile(
                path.join(__dirname, "static", url),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        }
    } else if (method === "POST") {
        let data = "";
        // 获取数据是一点一点获取的，需要拼接在一起
        req.on("data", (chunk) => {
            // console.log(chunk);
            data += chunk;
        });
        req.on("end", () => {
            //接收完成后的操作
            // data = querystring.parse(data);
            // data = JSON.stringify(data);
            data = JSON.parse(data);
            // console.log(typeof data);
            console.log("收到数据：", data);
            switch (url) {
                case "/":
                    if (!users[data.user]) {
                        res.write('{"OK":false,"msg":"此用户不存在！"}');
                    } else {
                        if (users[data.user] === data.password) {
                            res.write('{"OK":true,"msg":"登陆成功！"}');
                        } else {
                            res.write('{"OK":false,"msg":"账户或密码错误！"}');
                        }
                    }
                    break;
                case "/login":
                    if (!users[data.user]) {
                        res.write('{"OK":false,"msg":"此用户不存在！"}');
                    } else {
                        if (users[data.user] === data.password) {
                            res.write('{"OK":true,"msg":"登陆成功！"}');
                        } else {
                            res.write('{"OK":false,"msg":"账户或密码错误！"}');
                        }
                    }
                    break;
                case "/sign":
                    if (users[data.user]) {
                        res.write('{"OK":false,"msg":"此用户已存在！"}');
                    } else {
                        users[data.user] = data.password;
                        res.write('{"OK":true,"msg":"注册成功！"}');
                    }
                    break;
                default:
                    break;
            }
            console.log(users);
            res.end();
        });
    }
});

server.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});

function sendStaticFile(url, res) {
    if (url === "/" || url === "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
    }
}
