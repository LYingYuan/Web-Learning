const koa = require("koa");

const app = new koa();

const main = (ctx) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body = "Hello world";
};

app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
