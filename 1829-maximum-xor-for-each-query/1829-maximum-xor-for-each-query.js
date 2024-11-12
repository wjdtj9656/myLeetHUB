function getMaximumXor(nums, maximumBit) {
    const n = nums.length;
    const answer = new Array(n);
    const mask = (1 << maximumBit) - 1; 
    let currentXor = 0;

    for (let num of nums) {
        currentXor ^= num;
    }

    for (let i = n - 1; i >= 0; i--) {
        const k = currentXor ^ mask;
        answer[n - 1 - i] = k;
        currentXor ^= nums[i];
    }

    return answer;
}
