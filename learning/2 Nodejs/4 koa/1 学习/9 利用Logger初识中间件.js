const koa = require("koa");

const app = new koa();

// 注意这里有两个参数
const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
};

const main = (ctx) => {
    ctx.response.body = `Hello world`;
};

// 注意最后一定要有一个不是中间件的（没有next()）
app.use(logger);
app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
