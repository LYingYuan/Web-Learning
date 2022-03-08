const koa = require("koa");
const path = require("path");
const fs = require("fs");

const app = new koa();

const main = (context) => {
    context.response.type = "html";
    context.response.body = fs.createReadStream(
        path.join(__dirname, "static", "pages", "index.html")
    );
};
app.use(main);

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});
