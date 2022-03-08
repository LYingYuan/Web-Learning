const koa = require("koa");
const route = require("koa-route");
const serve = require("koa-static");
const fs = require("fs");
const path = require("path");

const app = new koa();

const main = (ctx) => {
    ctx.response.body = "Hello world";
};

// 静态资源 start
const static_file = serve(path.join(__dirname, "static"));
// 静态资源 end

// 路由 start
const index = (context) => {
    context.response.type = "html";
    context.response.body = path.join(__dirname, pages, index.html);
};
// 路由 end

// app.use(main);
app.use(route.get("/"), index);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
