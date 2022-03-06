const str =
    "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day.";
const my_str1 = /(?<=[^a-z\'A-Z\.]+[?])([a-z])/g; //需要转换为大写的字母
const my_str2 = /(?<=[^a-z\'A-Z\.]+[?])([a-z])/;
const my_str3 = /([^a-z\'A-Z\.]+)/g; //替换为空格

// 将特殊符号后面问号跟着的字母转换为大写字母
// 匹配
const chars = str.match(my_str1);
for (let i = 0, length = chars.length; i < length; i++) {
    str = str.replace(my_str2, chars[i].toUpperCase());
}

// 替换为空格
str = str.replace(my_str3, " ");

console.log(str); // 'I'm going to take a trip to Daocheng on May Day.'
