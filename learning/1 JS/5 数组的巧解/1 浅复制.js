function deepCopy1(arr) {
    return Array.from(arr);
}

function deepCopy2(arr) {
    return [...arr];
}
// 方案一：
// arr = Array.from(arr1);多维就不行

// 方案二：
// arr = [...arr1];多维就不行

// 方案三：
// arr = arr1.concat();

const arr1 = [0, [1, 3, 5], 8, 56];
// const arr2 = [...arr1];
const arr2 = Array.from(arr1);
console.log(arr2);
arr1[1][0] = 2;
console.log(arr1);
console.log(arr2);
