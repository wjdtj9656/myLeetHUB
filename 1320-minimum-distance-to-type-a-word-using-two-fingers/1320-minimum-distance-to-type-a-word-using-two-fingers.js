
var minimumDistance = function(word) {
    const getDist = (a, b) => {
        if (a === 26) return 0;
        return Math.abs(Math.floor(a / 6) - Math.floor(b / 6)) + Math.abs((a % 6) - (b % 6));
    };

    const n = word.length;
    const memo = Array.from({ length: n }, () => 
        Array.from({ length: 27 }, () => Array(27).fill(-1))
    );

    const dfs = (i, left, right) => {
        if (i === n) return 0;
        if (memo[i][left][right] !== -1) return memo[i][left][right];

        const target = word.charCodeAt(i) - 65;
        const moveLeft = getDist(left, target) + dfs(i + 1, target, right);
        const moveRight = getDist(right, target) + dfs(i + 1, left, target);

        return memo[i][left][right] = Math.min(moveLeft, moveRight);
    };

    return dfs(0, 26, 26);
};