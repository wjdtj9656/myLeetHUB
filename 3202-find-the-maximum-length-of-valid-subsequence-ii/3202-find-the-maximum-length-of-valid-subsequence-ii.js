function maximumLength(nums, k) {
    const n = nums.length;
    const mods = nums.map(x => x % k);
    const dp = Array.from({ length: n }, () => new Map());
    let ans = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const c = (mods[j] + mods[i]) % k;
            const prev = dp[j].get(c) || 1;
            const cur = prev + 1;
            if (cur > (dp[i].get(c) || 0)) {
                dp[i].set(c, cur);
                ans = Math.max(ans, cur);
            }
        }
    }
    return ans;
}
