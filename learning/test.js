var findUnsortedSubarray = function (nums) {
    // 首先给数组排序,采用快排
    let arr = nums.concat();
    const quickSort = (arr) => {
        const len = arr.length;
        if (len <= 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const pivot_index = Math.floor(len / 2);
        const pivot = arr.splice(pivot_index, 1)[0];
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
                // console.log("存入左边：", arr[i]);
            } else {
                right.push(arr[i]);
                // console.log("存入右边：", arr[i]);
            }
        }
        return quickSort(left).concat([pivot], quickSort(right));
    };
    arr = quickSort(arr);
    console.log(arr);
    const len = arr.length;
    let left = 0,
        right = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] !== nums[i]) {
            left = i;
            break;
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] !== nums[i]) {
            right = i;
            break;
        }
    }
    if (right === left) {
        return 0;
    }
    return right - left + 1;
};
const arr = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(arr));
