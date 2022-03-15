var isSymmetric = function (root) {
    // 中序遍历后判断是否是回文
    const inoder = (root) => {
        if (!root) {
            return [null];
        }
        return inoder(root.left).concat([root.val]).concat(inoder(root.right));
    };
    const arr = inoder(root);
    const len = arr.length;
    const root_index = Math.floor(len / 2);
    for (let i = 0, j = len - 1; i < root_index, j > root_index; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
};

const tree = creatTree([1, 2, 2, 2, null, 2]);
console.log(isSymmetric(tree));
