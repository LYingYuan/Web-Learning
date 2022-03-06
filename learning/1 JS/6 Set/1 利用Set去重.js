const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6];
const arr2 = Array.from(new Set(arr));
console.log(`原始数组: ${arr}`);
console.log(`去重后: ${arr2}`);
