
const xorAfterQueries = function(nums, queries) {
    const MOD = 1000000007;
    
    for (const [l, r, k, v] of queries) {
        for (let idx = l; idx <= r; idx += k) {
            nums[idx] = (nums[idx] * v) % MOD;
        }
    }
    
    return nums.reduce((acc, curr) => acc ^ curr, 0);
};