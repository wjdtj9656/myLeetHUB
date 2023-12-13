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
function maximumAverageSubtree(root) {
  function go(node) {
    if (node == null) return { sum: 0, count: 0, maxAvg: 0 };

    const l = go(node.left);
    const r = go(node.right);

    const sum = l.sum + r.sum + node.val;
    const count = l.count + r.count + 1;
    const maxAvg = Math.max(l.maxAvg, r.maxAvg, sum  / count);

    return { sum, count, maxAvg };
  }

  return go(root).maxAvg;
}