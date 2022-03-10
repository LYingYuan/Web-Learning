// todo学习 async

const koa = require("koa");

const app = new koa();

const handler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message,
        };
    }
};

const main = (ctx) => {
    ctx.throw(500);
};

app.use(handler);
app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
