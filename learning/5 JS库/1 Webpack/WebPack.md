https://juejin.cn/post/7023242274876162084

# 初始化包环境

```bash
npm init
```

# 安装Webpack

```bash
npm install webpack webpack-cli -D # 安装到本地依赖
```

webpack-cli: 好像是一个辅助工具

# 运行

```
npx webpack
```

webpack**默认支持处理 JS 与 JSON 文件，其他类型都处理不了，这里必须借助 Loader 来对不同类型的文件的进行处理。**

CSS：css-loader

# 插件plugin

如果我想打包后的资源文件，例如：js 或者 css 文件可以自动引入到 Html 中，就需要使用插件 [html-webpack-plugin](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fhtml-webpack-plugin)来帮助你完成这个操作

```
npm install html-webpack-plugin -D
```

# 自动清空打包目录

每次打包的时候，打包目录都会遗留上次打包的文件，为了保持打包目录的纯净，我们需要在打包前将打包目录清空

```
npm install clean-webpack-plugin -D
```

# 本地安装 cross-env

https://www.npmjs.com/package/cross-env

```
npm install cross-env -D
```

```json
"scripts": {
    "dev": "cross-env NODE_ENV=dev webpack serve --mode development", 
    "test": "cross-env NODE_ENV=test webpack --mode production",
    "build": "cross-env NODE_ENV=prod webpack --mode production"
  },
```

##  Loader 的执行顺序是固定从后往前,即按 `css-loader --> style-loader` 的顺序执行

##  [postcss-loader](https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Floaders%2Fpostcss-loader%2F)