const koa = require("koa");
const fs = require("fs");
const path = require("path");
const serve = require("koa-static");

const app = new koa();

const static = serve(path.join(__dirname, "static"));
app.use(static);

// *这里可以使用箭头函数
const main = async function (ctx, next) {
    ctx.response.type = "html";
    ctx.response.body = await fs.promises.readFile(
        path.join(__dirname, "static2", "login.html"),
        "utf-8"
    );
};
// ?为什么CSS加载不出来

app.use(main);

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
