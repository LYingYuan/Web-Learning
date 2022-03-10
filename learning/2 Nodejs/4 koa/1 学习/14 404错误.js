const koa = require("koa");

const app = new koa();

const main = (ctx) => {
    ctx.response.status = 404;
    ctx.response.body = "Page Not Found";
};

app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
