const MOD = 1e9 + 7;

var countGoodArrays = function(n, m, k) {
    let prev = Array(k + 1).fill(0);
    prev[0] = m;

    for (let i = 2; i <= n; i++) {
        const curr = Array(k + 1).fill(0);
        for (let j = 0; j <= Math.min(k, i - 1); j++) {
            if (j > 0) {
                curr[j] = (curr[j] + prev[j - 1]) % MOD;
            }
            curr[j] = (curr[j] + prev[j] * (m - 1)) % MOD;
        }
        prev = curr;
    }

    return prev[k];
};
