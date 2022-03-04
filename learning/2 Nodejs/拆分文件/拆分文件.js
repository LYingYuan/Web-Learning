// 将一个html文件拆分为html、css、script文件，并将它们防止在一个名为mine的文件夹里
const fs = require("fs");
const path = require("path");

// const new_file_name = "mine";

fs.readFile(path.join(__dirname, "test.html"), "utf-8", (err, res) => {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    myJs(res);
    myCSS(res);
    myHtml(res);
});

function myJs(data) {
    const regex_js = /(?<=<script>)[\s\S]*(?=<\/script>)/;
    const new_js = regex_js.exec(data);
    fs.writeFile(path.join(__dirname, "script.js"), new_js[0], (err) => {
        if (err) {
            console.log("JS文件写入失败" + err.message);
        }
    });
}

function myCSS(data) {
    const regex_css = /(?<=<style>)[\s\S]*(?=<\/style>)/;
    const new_css = regex_css.exec(data);
    fs.writeFile(path.join(__dirname, "style.css"), new_css[0], (err) => {
        if (err) {
            console.log("CSS文件写入失败" + err.message);
        }
    });
}

function myHtml(data) {
    const regex_css = /<style>[\s\S]*<\/style>/;
    const regex_js = /<script>[\s\S]*<\/script>/;
    const new_html = data
        .replace(regex_css, `<link rel="stylesheet" href="./style.css">`)
        .replace(
            regex_js,
            `<script type="text/javascript" src="./script.js"></script>`
        );
    fs.writeFile(path.join(__dirname, "index.html"), new_html, (err) => {
        if (err) {
            console.log("HTML文件写入失败" + err.message);
        }
    });
}
