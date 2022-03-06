var sortedSquares = function (nums) {
    const arr = nums.map((item) => {
        item ** 2;
    });
    return arr.sort((a, b) => a - b);
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
