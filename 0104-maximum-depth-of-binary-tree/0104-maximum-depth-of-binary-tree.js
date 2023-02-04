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
let max = 0;
var maxDepth = function(root,value) {
    if(!value) {
        value = 1;
        max = 0;
    }
    if(!root) return 0;
    if(root.left){
        maxDepth(root.left,value+1);
    }
    if(root.right){
        maxDepth(root.right,value+1);
    }
    max = Math.max(max,value);
    return max;
};