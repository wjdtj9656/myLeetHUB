function countCompleteSubarrays(nums) {
    const totalDistinct = new Set(nums).size;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const freq = new Map();
        for (let j = i; j < nums.length; j++) {
            freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
            if (freq.size === totalDistinct) {
                // j부터 끝까지 모두 complete subarray가 됨
                count += (nums.length - j);
                break;
            }
        }
    }

    return count;
}
