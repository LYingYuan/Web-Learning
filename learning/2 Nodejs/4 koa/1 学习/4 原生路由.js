const koa = require("koa");
const app = new koa();

const main = (context) => {
    if (context.request.path !== "/") {
        context.response.type = "html";
        context.response.body = `<a href="/">Index page</a>`;
    } else {
        context.response.body = "Hello World";
    }
};

app.use(main);

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
