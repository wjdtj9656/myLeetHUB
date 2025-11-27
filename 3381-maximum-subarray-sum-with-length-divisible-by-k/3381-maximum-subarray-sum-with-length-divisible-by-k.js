function maxSubarraySum(nums, k) {
    const n = nums.length;
    const prefMin = Array(k).fill(Infinity);
    let pref = 0;
    let ans = -Infinity;
    prefMin[0] = 0;

    for (let i = 0; i < n; i++) {
        pref += nums[i];
        const r = ((i + 1) % k + k) % k;
        ans = Math.max(ans, pref - prefMin[r]);
        prefMin[r] = Math.min(prefMin[r], pref);
    }
    return ans;
}
