const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
console.log("process.env.NODE_ENV=", process.env.NODE_ENV); // 打印环境变量

const config = {
    mode: "development", // 开发者模式
    entry: "./src/index.js", // 打包入口
    output: {
        filename: "bundle.js", // 输出文件名
        path: path.join(__dirname, "dist"), // 输出目录
    },
    module: {
        rules: [
            // 转换规则
            {
                test: /\.css$/, // 匹配所有的css文件
                use: ["style-loader", "css-loader", "postcss-loader"], // use: 对应的 Loader 名称
            },
        ],
    },
    plugins: [
        // 匹配插件
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            // 静态文件目录
            directory: path.resolve(__dirname, "public"),
        },
        compress: true, //是否启动压缩 gzip
        port: 8080, // 端口号
        // open:true  // 是否自动打开浏览器
    },
};
module.exports = (env, argv) => {
    console.log("argv.mode=", argv.mode); // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
};
