// 1-罗迎元 2-刘凯 3-张蕴涵 4-周渝 5-王燚
// G:\OneDrive\Luo\工作\团小组\青年大学习
const fs = require("fs");
const path = require("path");
const arr = [
  "2019211529-罗迎元",
  "2019211462-刘凯",
  "2019214489-张蕴涵",
  "2019211524-周渝",
  "2019211523-王燚",
];

const nowPath = "2022-04-03";
const filePath = path.join(
  "G:",
  "OneDrive",
  "Luo",
  "工作",
  "团小组",
  "青年大学习"
);

const picturePath = path.join(filePath, nowPath);

fs.readdir(picturePath, (err, fileList) => {
  if (err) {
    throw err;
  }

  fileList.forEach((name, index) => {
    //首先要保存后缀名
    // 统一格式为 1.png/jpg
    const type = "." + name.split(".")[1];
    const name_index = name.split(".")[0] - 1;
    const oldName = name;
    const newName = arr[name_index] + type;
    fs.rename(
      path.join(picturePath, oldName),
      path.join(picturePath, newName),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  });
});

console.log("修改完成");
