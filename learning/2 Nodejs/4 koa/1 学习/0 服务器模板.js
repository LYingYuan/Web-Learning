const koa = require("koa");

const app = new koa();

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
