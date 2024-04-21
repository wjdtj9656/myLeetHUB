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
var getLonelyNodes = function(root) {
    const answer = [];
    const search = (par,node) =>{
        let cnt = 0;
        if(par.left) cnt++;
        if(par.right) cnt++;
        if(cnt == 1 && par != node){
            answer.push(node.val);
        }
        if(node.left) search(node,node.left)
        if(node.right) search(node,node.right)
    }
    search(root,root)
    return answer;
};