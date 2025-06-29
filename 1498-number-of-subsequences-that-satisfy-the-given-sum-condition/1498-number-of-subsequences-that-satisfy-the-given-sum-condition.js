var numSubseq = function(nums, target) {
    const mod = 1e9 + 7;
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const pow = Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        pow[i] = (pow[i - 1] * 2) % mod;
    }

    let left = 0, right = n - 1, res = 0;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res = (res + pow[right - left]) % mod;
            left++;
        } else {
            right--;
        }
    }

    return res;
};
