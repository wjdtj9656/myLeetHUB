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
var countUnivalSubtrees = function(root) {
    if (!root) return 0

    let ref = root.val
    const head = [root]
    let count = 0;

    const dfs = (node, val) =>{
        if (node == null) return [true, val]

        let left =dfs(node.left, node.val)
        let right = dfs(node.right, node.val) 
        if ( left[0] &&right[0] && node.val == left[1] && node.val == right[1]){

            count++
            return [true,node.val]
        }
        
        return [false,node.val];
    }
    
    dfs(root, root.val)
    
    return count
};