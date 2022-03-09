// 如果代码运行过程中发生错误，我们需要把错误信息返回给用户。HTTP 协定约定这时要返回500状态码。Koa 提供了ctx.throw()方法，用来抛出错误，ctx.throw(500)就是抛出500错误。
const koa = require("koa");

const app = new koa();

const main = (ctx) => {
    ctx.throw(500);
};

app.use(main);

//
app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
