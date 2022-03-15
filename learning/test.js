function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const creatTree = function (src) {
    let root = new TreeNode();
    let result = new TreeNode();
    result = null;
    let queue = [];
    for (let i = 0; i < src.length; i++) {
        if (i == 0) {
            root = new TreeNode(src[i]);
            result = root;
            queue.push(root);
        }
        if (queue.length) {
            root = queue.shift();
        } else {
            break;
        }
        if (i + 1 < src.length && src[i + 1] !== null) {
            root.left = new TreeNode(src[i + 1]);
            queue.push(root.left);
        }
        if (i + 2 < src.length && src[i + 2] !== null) {
            root.right = new TreeNode(src[i + 2]);
            queue.push(root.right);
        }
        i = i + 1;
    }
    return result;
};

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
