var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0, i = 0;
    while (i < nums.length) {
        let min = nums[i];
        count++;
        while (i < nums.length && nums[i] - min <= k) {
            i++;
        }
    }
    return count;
};
