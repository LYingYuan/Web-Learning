const koa = require("koa");

const app = new koa();

const main = (ctx) => {
    ctx.throw(500);
};

app.on("error", (err, ctx) => {
    console.log("Server error", err);
});

app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
