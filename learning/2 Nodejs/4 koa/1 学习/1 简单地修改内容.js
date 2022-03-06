// 阮一峰：http://www.ruanyifeng.com/blog/2017/08/koa.html
const koa = require("koa");

const app = new koa();

const main = (ctx) => {
    ctx.response.body = "Hello world";
};

app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
