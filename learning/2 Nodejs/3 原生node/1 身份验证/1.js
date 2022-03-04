const http = require("http");
// 新建cookie start
const server = http.createServer((req, res) => {
    setCookie(res, "lyy");
    parseCookie(req);
    res.end();
});
server.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
function setCookie(res, user) {
    res.setHeader(
        "Set-Cookie",
        `user=${user}; path=/; expires=${setCookieExpirationTime()}`
    );
}
// 新建cookie end

// 生成cookie有效时间 start
function setCookieExpirationTime() {
    // 24hour有效
    const n = 24;
    const date = new Date();
    date.setHours(date.getHours() + n);
    return date.toUTCString();
}
// 生成cookie有效时间 end

// 解析cookie start
function parseCookie(req) {
    const cookies = req.headers.cookie;
    console.log(cookies);
    cookies.split(";").forEach((cookie) => {
        if (!cookie) {
            return "";
        }
        const arr = cookie.split("=");
        const key = arr[0];
        const value = arr[1];
        console.log(key, value);
        // return value;
        req.username = value;
        // req.cookie[key] = value;
    });
}
// 解析cookie end
