var reverseOddLevels = function(root) {
    if (!root) return null;

    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let size = queue.length;
        let nodes = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            nodes.push(node);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (level % 2 === 1) {
            let values = nodes.map(n => n.val).reverse();
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].val = values[i];
            }
        }

        level++;
    }

    return root;
};