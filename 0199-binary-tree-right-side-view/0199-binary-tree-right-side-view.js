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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ans = [];
    const map = new Map();
    const search = (root,lvl) =>{
        if(!root) return [];
       // ans.push([root.val,lvl]);
        map.set(lvl,root.val);
        if(root.left) search(root.left, lvl+1);
        if(root.right) search(root.right, lvl+1);
        }
    search(root,0);
    for(let [key,value] of map){
        ans.push(value);
    }
    return ans;
};