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
var maxProduct = function(root) {

    const result = [];
    const mod  = 1e9 + 7;
    let search = (node) =>{
        if(!node) return 0;
        if(!node.left && !node.right) return node.val;
        let sumL = search(node.left);
        let sumR = search(node.right);
        result.push(sumL, sumR);
        return sumL + sumR + node.val;
    }
    let sum = search(root);
    let answer = 0;
    for(let i=0; i<result.length; i++){
        answer = Math.max(answer,result[i] *(sum-result[i]));
    }
    return answer % mod;
};

