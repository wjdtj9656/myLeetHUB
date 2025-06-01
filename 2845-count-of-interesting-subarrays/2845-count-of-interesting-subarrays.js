function countInterestingSubarrays(nums, modulo, k) {
    const freq = new Map();
    let result = 0;
    let prefix = 0;
    freq.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % modulo === k) {
            prefix = (prefix + 1) % modulo;
        }
        const need = (prefix - k + modulo) % modulo;
        result += freq.get(need) || 0;
        freq.set(prefix, (freq.get(prefix) || 0) + 1);
    }
    return result;
}