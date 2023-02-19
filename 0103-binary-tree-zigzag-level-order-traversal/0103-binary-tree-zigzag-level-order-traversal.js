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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const answer = Array.from(new Array(2000),()=>new Array());
    search(root, 1, answer);
    const result = [];
    for(let i=0; i<answer.length; i++){
        if(answer[i].length > 0) result.push(answer[i]);
    }
    return result
};
    const search = (root, depth, result ) =>{
        if(!root) return;
        if(!root.left && !root.right){
            if(depth % 2 === 1) result[depth].push(root.val);
            else result[depth].unshift(root.val);
            return;
        }
        if(depth % 2 === 1) result[depth].push(root.val);
        else result[depth].unshift(root.val);
        
        if(root.left){
            search(root.left, depth+1, result);
        }
        if(root.right){
            search(root.right,depth+1, result);
        }
    }