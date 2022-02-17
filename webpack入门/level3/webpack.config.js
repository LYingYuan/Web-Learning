// 引入三个模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // 入口 --> src的index.js-->保持命名一致
    // 根据自己建立的路径修改
    entry: "./src/index.js",
    // 出口
    output: {
        // 注意路径问题 , 自动生成的文件名./dist(自己写的)
        path: path.resolve(__dirname, "./dist"),
        // 自动打包,生产的js文件命名
        filename: "main.js",
    },
    // html文件
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // 让webpack自动生成一个html文件 要把指定的模块里的代码携带者
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件进行重命名
            filename: "index.css",
        }),
    ],
    // css,less,img
    module: {
        rules: [
            {
                test: /\.css$/i, // i:不区分大小写
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};
