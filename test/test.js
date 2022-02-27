var maxDepth = function (root) {
    let max = 1;
    const hasChild = (root) => {
        if (root.left) {
            max += 1;
            hasChild(root.left);
        } else if (root.right) {
            max += 1;
            hasChild(root.right);
        }
        return;
    };
    hasChild(root);
    return max;
};
console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
