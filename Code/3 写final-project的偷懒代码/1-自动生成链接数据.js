// 功能概述：快速把一段使用回车划分好的中文字符串转变为项目链接中的数据格式
// 源数据：
// 小说/n文学/n传记/n青春文学/n动漫/幽默/n艺术/n摄影/n偶像明星/n涂色/填色
// 目标数据：(没有最外层花括号，此单纯为了收起注释)最后一个要加上mode:"no-sep"
{
  // {
  //   name: "小说",
  //   url: "#",
  //   mode: "red",
  // },
  // {
  //   name: "文学",
  //   url: "#",
  // },
  // {
  //   name: "传记",
  //   url: "#",
  // },
  // {
  //   name: "青春文学",
  //   url: "#",
  // },
  // {
  //   name: "动漫/幽默",
  //   url: "#",
  // },
  // {
  //   name: "艺术",
  //   url: "#",
  // },
  // {
  //   name: "摄影",
  //   url: "#",
  // },
  // {
  //   name: "偶像明星",
  //   url: "#",
  // },
  // {
  //   name: "涂色/填色",
  //   url: "#",
  //   mode: "no-sep",
  // },
}
const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "1-原始数据.txt"), "utf-8", (err, res) => {
  if (err) {
    return console.log("读取文件失败" + err.message);
  }
  // console.log(res);
  handleData(res);
});

function handleData(data) {
  // 换行符的正则表达式：
  const str = /\r\n/;
  // 把数据划分为数组
  const str_arr = data.split(str);
  // 获取数组长度方便之后添加特殊属性mode
  const len = str_arr.length;
  // 单个目标：
  // {name: "小说",url: "#",},
  const str0 = `{name: '`;
  const str1 = `',url: '#',}`;
  // 最后一位添加str2其余str1
  const str2 = `',url: '#', mode: 'no-sep'}`;
  const result_arr = [];
  for (const str3 of str_arr) {
    result_arr.push(str0 + str3 + str1);
  }
  // 最后一个特殊处理
  result_arr[len - 1] = str0 + str_arr[len - 1] + str2;

  const result = result_arr.join(",");
  fs.writeFile(path.join(__dirname, "1-结果.txt"), result, (err) => {
    if (err) {
      console.log("结果写入失败" + err.message);
    } else {
      console.log("结果写入成功");
    }
  });
}
