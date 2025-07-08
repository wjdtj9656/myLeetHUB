function maxValue(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;
    const dp = Array.from({ length: k + 1 }, () => Array(n).fill(-1));

    function dfs(curIndex, count) {
        if (count === 0 || curIndex === n) {
            return 0;
        }
        if (dp[count][curIndex] !== -1) {
            return dp[count][curIndex];
        }

        const nextIndex = bisectRight(events, events[curIndex][1]);
        const skip = dfs(curIndex + 1, count);
        const take = events[curIndex][2] + dfs(nextIndex, count - 1);
        dp[count][curIndex] = Math.max(skip, take);
        return dp[count][curIndex];
    }

    function bisectRight(events, target) {
        let left = 0;
        let right = events.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][0] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    return dfs(0, k);
}
