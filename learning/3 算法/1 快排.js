const quickSort = (arr) => {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    const pivot_index = Math.floor(len / 2);
    const pivot = arr.splice(pivot_index, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

const arr = [85, 40, 51, 64, 55, 63, 45];
console.log(quickSort(arr));
