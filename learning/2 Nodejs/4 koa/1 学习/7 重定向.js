const koa = require("koa");
const route = require("koa-route");

const app = new koa();

const redirect = (ctx) => {
    ctx.response.redirect = "/";
    ctx.response.body = `<a href='/'>Index Page</a>`;
};

// !关键步骤
app.use(route.get("/redirect", redirect));

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
