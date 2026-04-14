var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const factorySlots = [];
    for (const [pos, limit] of factory) {
        for (let i = 0; i < limit; i++) {
            factorySlots.push(pos);
        }
    }

    const n = robot.length;
    const m = factorySlots.length;
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let j = 1; j <= m; j++) {
        for (let i = n; i >= 1; i--) {
            dp[i] = Math.min(dp[i], dp[i - 1] + Math.abs(robot[i - 1] - factorySlots[j - 1]));
        }
    }

    return dp[n];
};