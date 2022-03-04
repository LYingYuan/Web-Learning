var findUnsortedSubarray = function (nums) {
    // 首先给数组排序,采用快排
    const arr = [...nums].sort((a, b) => a - b);
    console.log(arr);
    const len = arr.length;
};
const arr = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(arr));
