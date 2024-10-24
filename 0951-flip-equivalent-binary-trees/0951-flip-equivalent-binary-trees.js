/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
if(root1 == null && root2 == null){
    return true;
}
else if(root1 == null){
    return false;
}
else if(root2 == null){
    return false;
}
else if(root1.val != root2.val){
    return false;
}
  let withoutFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
  let withFlip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

  return withoutFlip || withFlip
};