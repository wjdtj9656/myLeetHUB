function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function dfs(node, depth, nodeDepths, nodeHeights, depthHeights) {
  if (!node) return -1;

  nodeDepths[node.val] = depth;

  let leftHeight = dfs(node.left, depth + 1, nodeDepths, nodeHeights, depthHeights) + 1;
  let rightHeight = dfs(node.right, depth + 1, nodeDepths, nodeHeights, depthHeights) + 1;

  let height = Math.max(leftHeight, rightHeight);
  nodeHeights[node.val] = height;

  if (!depthHeights[depth]) depthHeights[depth] = [];
  depthHeights[depth].push({ val: node.val, height });

  return height;
}

function treeQueries(root, queries) {
  let nodeDepths = {};     
  let nodeHeights = {};   
  let depthHeights = {};   

  dfs(root, 0, nodeDepths, nodeHeights, depthHeights);

  for (let depth in depthHeights) {
    depthHeights[depth].sort((a, b) => b.height - a.height);
    depthHeights[depth] = depthHeights[depth].slice(0, 2);
  }

  let answers = [];

  for (let q of queries) {
    let depth = nodeDepths[q];
    let maxHeight = 0;

    if (depthHeights[depth][0].val === q) {
      if (depthHeights[depth].length > 1) {
        maxHeight = depthHeights[depth][1].height + depth;
      } else {
        maxHeight = depth - 1; 
      }
    } else {
      maxHeight = depthHeights[depth][0].height + depth;
    }

    answers.push(maxHeight);
  }

  return answers;
}