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
var getMinimumDifference = function(root) {
    const arr = toArray(root);
    let result = Infinity;
    let i = 1;
    while(i<arr.length){
        let diff = Math.abs(arr[i-1]- arr[i]);
        result = Math.min(diff, result);
        i++;
    }
    return result;
};

function toArray(root, out=[]){
    if(root){
        toArray(root.left, out);
        out.push(root.val);
        toArray(root.right, out);
        return out;
    }
}