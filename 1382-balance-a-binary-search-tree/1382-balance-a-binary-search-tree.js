var balanceBST = function(root) {
    const sortedArr = [];
    
    const inOrder = (node) => {
        if (!node) return;
        inOrder(node.left);
        sortedArr.push(node.val);
        inOrder(node.right);
    };
    
    const buildTree = (start, end) => {
        if (start > end) return null;
        
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(sortedArr[mid]);
        
        node.left = buildTree(start, mid - 1);
        node.right = buildTree(mid + 1, end);
        
        return node;
    };
    
    inOrder(root);
    return buildTree(0, sortedArr.length - 1);
};