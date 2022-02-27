const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "1.txt"), "utf-8", (err, res) => {
    if (err) {
        return console("读取文件失败" + err.message);
    }
    console.log("读取文件成功: \n" + res);
    const new_data = res.replace(/ /g, "\n").replace(/=/g, ":");
    console.log(new_data);
    fs.writeFile(path.join(__dirname, "3.txt"), new_data, (err, res) => {
        if (err) {
            return console.log("写入文件失败 " + err.message);
        }
        console.log("写入文件成功");
    });
});
