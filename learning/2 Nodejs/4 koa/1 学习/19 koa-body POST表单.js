const koa = require("koa");
const koa_body = require("koa-body");

const app = new koa();

const main = (ctx) => {
    const body = ctx.request.body;
    if (!body.name) {
        ctx.throw(400, "Name required");
    }
    ctx.body = {
        name: body.name,
    };
};

app.use(koa_body);
app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
