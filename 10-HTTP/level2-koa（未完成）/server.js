const fs = require("fs");
const path = require("path");
const koa = require("koa");
const route = require("koa-route");
const compose = require("koa-compose");
const serve = require("koa-static");

const app = new koa();

const main = (ctx) => {
    ctx.response.body = "Hello world";
};

// 静态资源 start
const static_file = serve(path.join(__dirname, "static"));
// 静态资源 end

// 主页路由 start
const index = (context) => {
    context.response.type = "html";
    context.response.body = path.join(__dirname, pages, index.html);
};
// 主页路由 end

// 登录路由 start
const login = (ctx)=>{
    
}
// 登录路由 end

// 注册路由 start

// 注册路由 end

// app.use(main);
app.use(route.get("/"), index);

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
});
