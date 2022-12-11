/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let result;
let total = 0;
var maxPathSum = function(root) {
    let max = -10e9;
    
    const findSum = (node) =>{
        if(!node) return 0;
        
        let left = findSum(node.left);
        let right = findSum(node.right);
        let total = left + right + node.val;
        let leftSum = left + node.val;
        let rightSum = right + node.val;
        
        max = Math.max(max, node.val, total, leftSum, rightSum);
        return Math.max(leftSum, rightSum, node.val);
    }
    findSum(root);
    return max;
};