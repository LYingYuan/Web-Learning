// 学习koa-route的简单使用
const koa = require("koa");
const route = require("koa-route");

const app = new koa();

const about = (ctx) => {
    ctx.response.type = "html";
    ctx.response.body = `<a href='/'>Index Page</a>`;
};

const main = (ctx) => {
    ctx.response.body = "Hello world";
};

app.use(route.get("/", main));
app.use(route.get("/about", about));

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
