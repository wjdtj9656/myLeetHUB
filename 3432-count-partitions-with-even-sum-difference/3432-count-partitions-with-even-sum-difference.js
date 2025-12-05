function countPartitions(nums) {
    const total = nums.reduce((sum, x) => sum + x, 0);
    if (total % 2 !== 0) {
        return 0;
    }

    return nums.length - 1;
}