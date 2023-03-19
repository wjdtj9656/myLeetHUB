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
const map = new Map();
var rob = function(root) {
    if(!root) return 0;
    if(map.has(root)) return map.get(root);
    const jump = root.val + (!root.left? 0: rob(root.left.left) + rob(root.left.right))
    +(!root.right? 0: rob(root.right.left) + rob(root.right.right));
    const go = rob(root.left) + rob(root.right);
    const res = Math.max(jump, go);
    map.set(root,res);
    return res;
};
