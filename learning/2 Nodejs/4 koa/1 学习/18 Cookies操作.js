const koa = require("koa");

const app = new koa();

const main = (ctx) => {
    const n = Number(ctx.cookies.get("view") || 0) + 1;
    ctx.cookies.set("view", n);
    ctx.response.body = n + "view";
};

app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
