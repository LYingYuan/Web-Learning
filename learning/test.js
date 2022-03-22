// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// const creatTree = function (src) {
//     let root = new TreeNode();
//     let result = new TreeNode();
//     result = null;
//     let queue = [];
//     for (let i = 0; i < src.length; i++) {
//         if (i == 0) {
//             root = new TreeNode(src[i]);
//             result = root;
//             queue.push(root);
//         }
//         if (queue.length) {
//             root = queue.shift();
//         } else {
//             break;
//         }
//         if (i + 1 < src.length && src[i + 1] !== null) {
//             root.left = new TreeNode(src[i + 1]);
//             queue.push(root.left);
//         }
//         if (i + 2 < src.length && src[i + 2] !== null) {
//             root.right = new TreeNode(src[i + 2]);
//             queue.push(root.right);
//         }
//         i = i + 1;
//     }
//     return result;
// };

// var findContinuousSequence = function (target) {
//     //滑动窗口，左闭右开
//     let leftIndex = 1;
//     let rightIndex = 1;
//     let sum = 0;
//     const result = [];

//     while (leftIndex < target / 2) {
//         if (sum < target) {
//             sum += rightIndex++;
//         } else if (sum > target) {
//             sum -= leftIndex++;
//         } else {
//             const arr = [];
//             for (let i = rightIndex; i < rightIndex; i++) {
//                 arr.push(i);
//             }
//             result.push(arr);
//             sum -= leftIndex++;
//         }
//     }
//     return result;
// };

// console.log(findContinuousSequence(9));
var reverseWords = function (s) {
    const arr = s.split(" ");
    arr.reverse();
    arr.forEach((str, index) => {
        if (str === "") {
            arr.splice(index, 1);
        } else {
            str.trim();
        }
    });
    const result = arr.join(" ");
    return result.trim();
};
console.log(reverseWords("a good   example"));
