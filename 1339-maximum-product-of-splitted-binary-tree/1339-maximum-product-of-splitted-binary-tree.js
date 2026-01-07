/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    const sums = [];

    const getSum = (node) => {
        if (!node) return 0;
        const currentSum = node.val + getSum(node.left) + getSum(node.right);
        sums.push(currentSum);
        return currentSum;
    };

    const totalSum = BigInt(getSum(root));
    let max = 0n;

    for (const s of sums) {
        const subSum = BigInt(s);
        const currentProduct = subSum * (totalSum - subSum);
        if (currentProduct > max) {
            max = currentProduct;
        }
    }

    return Number(max % 1000000007n);
};