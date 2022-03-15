// 源格式：     https://www.199it.com/?p=1398256&preview=true
// 目标格式：   https://www.199it.com/archives/1398256.html
const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "1 原始内容.txt"), "utf-8", (err, res) => {
    if (err) {
        return console.log("读取文件失败" + err.message);
    }
    const data = disposeUrl(res);
    classifyText(data);
    microBlogText(data);
});

// 处理结果为归类内容
function classifyText(data) {
    // 只要标题和链接
    // 标题下标：3n 链接下标：3n+2
    const arr = [];
    const index_val = Math.floor(data.length / 3);

    for (let i = 0; i < index_val; i++) {
        arr.push(data[3 * i]);
        arr.push(data[3 * i + 2]);
    }
    const str = arr.join(`\n`);
    // console.log(
    //     `============================\n3、归类内容（无缩进）：\n============================\n` +
    //         str
    // );
    fs.writeFile(path.join(__dirname, "2 归类文档.txt"), str, (err) => {
        if (err) {
            console.log("归类文档写入失败" + err.message);
        } else {
            console.log("归类文档写入成功");
        }
    });
}

// 处理结果为微博内容
function microBlogText(data) {
    const arr = [];
    const index_val = Math.floor(data.length / 3);
    console.log(`一共${index_val}条\n============================`);
    for (let i = 0; i < index_val; i++) {
        arr.push(
            `【` + data[3 * i] + `】` + data[3 * i + 1] + data[3 * i + 2] + `\n`
        );
        // if (arr[i].length > 150) {
        //     console.log(`第${i + 1}条超出字数限制` + arr[i].length);
        // }
    }
    // console.log(arr[0] + `\n` + arr[0].length);
    // console.log(`============================`);
    const str = arr.join(`\n`);
    // console.log(
    //     `============================\n3、微博内容（无缩进）：\n============================\n` +
    //         str
    // );
    fs.writeFile(path.join(__dirname, "3 微博内容.txt"), str, (err) => {
        if (err) {
            console.log("微博内容写入失败" + err.message);
        } else {
            console.log("微博内容写入成功");
        }
    });
}

// 处理链接
function disposeUrl(data) {
    const str1 = /&preview=true/g; // 替换为.html
    const str2 = /\?p=/g; // 替换为archives/
    const str3 = /https/g; // 替换为http
    data = data
        .replace(str1, `.html`)
        .replace(str2, `archives/`)
        .replace(str3, `http`);
    // console.log(
    //     `============================\n1、处理链接后的结果：\n============================\n` +
    //         data
    // );
    const str = /\r\n/;
    const str_arr = data.split(str);
    // console.log(
    //     `============================\n2、分隔后的结果：\n============================\n` +
    //         str_arr
    // );
    return str_arr;
}
