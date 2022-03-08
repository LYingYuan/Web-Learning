const koa = require("koa");

const app = new koa();

const main = (context) => {
    if (context.request.accepts("xml")) {
        context.response.type = "xml";
        context.response.body = `<data>Hello world</data>`;
    } else if (context.request.accepts("json")) {
        context.response.type = "json";
        context.response.body = { data: "Hello world" };
    } else if (context.request.accepts("html")) {
        context.response.type = "html";
        context.response.body = `<p>Hello world</p>`;
    } else {
        context.response.type = "text";
        context.response.body = "Hello world";
    }
};
app.use(main);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
