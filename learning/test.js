var majorityElement = function (nums) {
    const len = nums.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        const num = nums[i];
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map[num]++;
        }
    }
    const len2 = Math.floor(len / 2);
    for (const [val, num] of map.entries()) {
        if (num > len2) {
            return val;
        }
    }
};
const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(arr));
