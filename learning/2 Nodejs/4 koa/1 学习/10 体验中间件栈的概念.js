const koa = require("koa");

const app = new koa();

const one = (ctx, next) => {
    console.log(">>one");
    next();
    console.log("<<one");
};

const two = (ctx, next) => {
    console.log(">>two");
    next();
    console.log("<<two");
};

const three = (ctx, next) => {
    console.log(">>three");
    next();
    console.log("<<three");
};

const main = (ctx) => {
    ctx.response.body = "Hello world";
};

app.use(one);
app.use(two);
app.use(three);
app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});

// *结果
// >>one
// >>two
// >>three
// <<three
// <<two
// <<one
// *注释two中的next之后：
// >>one
// >>two
// <<two
// <<one
