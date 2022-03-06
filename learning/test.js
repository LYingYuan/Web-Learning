function arr(arr) {
    const len = arr.length;
    const left = [1, 2, 3];
    const right = [4, 5, 6];
    // arr.splice(0,len,left.concat(right).map(item => item));
    const arr3 = Array.from(left.concat(right));
    // console.log(arr3 instanceof Array);
    for (const [index, val] of arr3.entries()) {
        arr.splice(index, 1, val);
        console.log(arr+"he");
    }
}
const arr2 = [1, 23, 4];
arr(arr2);
console.log(arr2);
