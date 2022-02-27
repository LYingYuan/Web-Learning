// map():对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
//                          ↓不能使用箭头函数，里面的this指向外层代码块，（非严格模式下为window），此时指定 thisArg 无效。
// Array.prototype.lyyMap() = (fun,thisArg)=>{
//     const result = [];

// }
Array.prototype.lyyMap = function (fun, thisArg) {
    const result = [];
    this.reduce((prev, curr, index, array) => {
        result[index] = fun.call(thisArg, array[index], index, array);
    }, 0);
    return result;
};

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];

// 使用reduce将数组的每个元素+索引值
const _mapArr = arr.lyyMap(function (v, i) {
    console.log(v + i);
    return v + i + this.length;
}, arr2);
console.log(_mapArr);
