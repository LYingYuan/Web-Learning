let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day.";
let my_str1 = /(?<=[^a-z\'A-Z\.]+[?])([a-z])/g; //需要转换为大写的字母
let my_str2 = /(?<=[^a-z\'A-Z\.]+[?])([a-z])/;
let my_str3 = /([^a-z\'A-Z\.]+)/g; //替换为空格

// 将特殊符号后面问号跟着的字母转换为大写字母
// 匹配
let chars = str.match(my_str1);
for (let i = 0, length = chars.length; i < length; i++) {
    str = str.replace(my_str2, chars[i].toUpperCase());
}

// 替换为空格
str = str.replace(my_str3, " ");

console.log(str); // 'I'm going to take a trip to Daocheng on May Day.'
