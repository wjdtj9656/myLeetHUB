function constrainedSubsetSum(nums, k) {
    const n = nums.length;
    const dp = Array(n).fill(0);
    dp[0] = nums[0];

    const deque = [0];

    let maxSum = nums[0];

    for (let i = 1; i < n; i++) {
        while (deque.length > 0 && deque[0] < i - k) {
            deque.shift();
        }

        dp[i] = nums[i] + (dp[deque[0]] > 0 ? dp[deque[0]] : 0);

        maxSum = Math.max(maxSum, dp[i]);

        while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
            deque.pop();
        }

        deque.push(i);
    }

    return maxSum;
}