const koa = require("koa");
const compose = require("koa-compose");

const app = new koa();

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
};

const main = (ctx) => {
    ctx.response.body = "Hello world";
};

const middle_wares = compose([logger, main]);
app.use(middle_wares);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
