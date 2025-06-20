var maxDistance = function(s, k) {
    const n = s.length;
    const dx = { 'N': 0, 'S': 0, 'E': 1, 'W': -1 };
    const dy = { 'N': 1, 'S': -1, 'E': 0, 'W': 0 };
    let ans = 0;
    const diags = [[1,1],[1,-1],[-1,1],[-1,-1]];
    for (const [sx, sy] of diags) {
        let S0 = 0, neg = 0;
        for (let i = 0; i < n; i++) {
            const v = sx * dx[s[i]] + sy * dy[s[i]];
            if (v === -1) neg++;
            S0 += v;
            const flips = neg < k ? neg : k;
            const cur = S0 + 2 * flips;
            if (cur > ans) ans = cur;
        }
    }
    return ans;
};
