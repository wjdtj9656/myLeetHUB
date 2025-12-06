function countPartitions(nums, k) {
    const MOD = 1000000007;
    const n = nums.length;
    const dp = new Array(n + 1).fill(0);
    const pre = new Array(n + 2).fill(0);
    dp[0] = 1;
    pre[0] = 0;
    pre[1] = 1;
    let L = 0;
    const maxD = [];
    const minD = [];
    for (let r = 0; r < n; r++) {
        const val = nums[r];
        while (maxD.length && nums[maxD[maxD.length - 1]] <= val) maxD.pop();
        maxD.push(r);
        while (minD.length && nums[minD[minD.length - 1]] >= val) minD.pop();
        minD.push(r);
        while (nums[maxD[0]] - nums[minD[0]] > k) {
            if (maxD[0] === L) maxD.shift();
            if (minD[0] === L) minD.shift();
            L++;
        }
        let v = pre[r + 1] - pre[L];
        v %= MOD;
        if (v < 0) v += MOD;
        dp[r + 1] = v;
        pre[r + 2] = (pre[r + 1] + dp[r + 1]) % MOD;
    }
    return dp[n];
}
