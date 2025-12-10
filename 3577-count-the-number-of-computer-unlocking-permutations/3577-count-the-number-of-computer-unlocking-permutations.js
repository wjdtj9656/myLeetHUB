/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function (complexity) {
    const MOD = 1_000_000_007;
    const n = complexity.length;
    const root = complexity[0];

    for (let i = 1; i < n; i++) {
        if (complexity[i] <= root) return 0;
    }

    let ans = 1;
    for (let i = 1; i <= n - 1; i++) {
        ans = (ans * i) % MOD;
    }
    return ans;
};

