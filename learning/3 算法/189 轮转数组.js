var rotate = function (nums, k) {
    let left = [];
    let right = [];
    const len = nums.length;
    for (const [index, val] of nums.entries()) {
        if (index < len - k) {
            right.push(val);
        } else {
            left.push(val);
        }
    }
    nums = left.concat(right);
    nums = [1];
};

const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotate(arr, 3));
rotate(arr);
console.log(arr);
