
var twoSum = function(nums, target) {
    const n = nums.length-1;
    const map = new Map();
    for(let i=0;i<n;i++){
        const match = target - i;
        if(map.has(match)&&i!=map.get(match)){
            return [i,map.get(match)];
        }
        map.set(nums[i],i)
    }
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums,target));