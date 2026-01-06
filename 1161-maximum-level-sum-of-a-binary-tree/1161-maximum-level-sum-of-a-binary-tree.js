var maxLevelSum = function(root) {
    if (!root) return 0;

    let queue = [root];
    let maxSum = -Infinity;
    let maxLevel = 0;
    let currentLevel = 1;

    while (queue.length > 0) {
        let levelSum = 0;
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++;
    }

    return maxLevel;
};