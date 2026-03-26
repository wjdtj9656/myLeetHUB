var sumRootToLeaf = function(root) {
    const dfs = (node, currentSum) => {
        if (!node) return 0;
        
        currentSum = (currentSum << 1) | node.val;
        
        if (!node.left && !node.right) {
            return currentSum;
        }
        
        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    };
    
    return dfs(root, 0);
};