/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @return {boolean}
 */
function existsInTree(root, target) {
  if (!root) return false;
  if (root === target) return true;
  return existsInTree(root.left, target) || existsInTree(root.right, target);
}

/**
 * LCA(최소 공통 조상)를 재귀적으로 찾는 함수
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function findLCA(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = findLCA(root.left, p, q);
  const right = findLCA(root.right, p, q);

  // 왼쪽과 오른쪽 모두에서 노드를 찾은 경우, root가 LCA
  if (left && right) {
    return root;
  }

  // 한 쪽에서만 노드를 찾은 경우, 찾은 쪽 노드를 반환
  return left || right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // p나 q가 트리에 없는 경우 null
  if (!existsInTree(root, p) || !existsInTree(root, q)) {
    return null;
  }

  // LCA 탐색
  return findLCA(root, p, q);
};
