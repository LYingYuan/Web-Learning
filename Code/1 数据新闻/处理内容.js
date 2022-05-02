// 源格式：     https://www.199it.com/?p=1398256&preview=true
// 目标格式：   http://www.199it.com/archives/1398256.html
const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "1 原始内容.txt"), "utf-8", (err, res) => {
  if (err) {
    return console.log("读取文件失败" + err.message);
  }
  const data = disposeUrl(res);
  // 检查数据是否合理（条数是3的倍数）
  if (data.length % 3 === 0 || data.length <= 2) {
    classifyText(data);
    microBlogText(data);
  } else {
    console.log("数据不对，检查一下");
  }
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
function microBlogText(old_data) {
  // 优化标题
  const data = optimizeTitles(old_data);

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

// 微博内容优化标题
// 1.自动保留带“财报”字样、“研究”字样
// 2.自动去除简介中包含的机构名称
// 3.提示第几条包含&字符
function optimizeTitles(data) {
  const arr = [];
  const index_val = Math.floor(data.length / 3);

  // 标题位于3 * i位置，简介内容位于3 * i + 1位置
  for (let i = 0; i < index_val; i++) {
    const title = data[3 * i];
    arr.push(data[3 * i]);
    arr.push(data[3 * i + 1]);
    arr.push(data[3 * i + 2]);
    let organization, other;

    // 找到机构名称 start
    if (title.includes(":")) {
      // 如果包含的是英文冒号就使用英文冒号分割
      organization = title.split(":")[0];
      other = title.split(":")[1];
    } else if (title.includes("：")) {
      // 中文冒号的情况
      organization = title.split("：")[0];
      other = title.split("：")[1];
    } else {
      // 该条推文并无机构
      continue;
    }
    // 去掉首尾空格
    const new_organization = organization.trim();
    // 找到机构名称 end

    // 处理机构名称 start

    // 情况1：“机构”
    if (new_organization === "机构") {
      continue;
    }
    // 情况2: “XXX财报”
    if (new_organization.includes("财报")) {
      continue;
    }
    // 情况3：简介中包含了该机构
    const brief_introduction = data[3 * i + 1];
    if (brief_introduction.includes(new_organization)) {
      arr[3 * i] = other;
    }
    // 情况4：多个机构使用 “&” 隔开
    if (new_organization.includes("&")) {
      console.log(`第${i}条包含&（多个机构）`);
    }

    // 处理机构名称 end
  }
  return arr;
}
