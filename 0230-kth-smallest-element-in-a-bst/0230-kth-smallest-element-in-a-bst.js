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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];

    const search = (node) =>{

        if(node){
            arr.push(node.val);
        }
        else{
            return;
        }
        if(node.left){
            search(node.left);
        }
        if(node.right){
            search(node.right);
        }
    }
    search(root);
    arr.sort((a,b)=>a-b);
    return arr[k-1];
};