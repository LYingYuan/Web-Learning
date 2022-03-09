// 学习koa-static的简单使用
const koa = require("koa");
const path = require("path");
const serve = require("koa-static");

const app = new koa();

// 静态资源
// const static_file = serve(path.join(__dirname, "static", "pages"));
const static_file = serve(path.join(__dirname, "static2"));

app.use(static_file);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
