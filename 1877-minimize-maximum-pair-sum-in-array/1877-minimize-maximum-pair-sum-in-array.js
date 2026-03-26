/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    let maxPairSum = 0;
    const n = nums.length;
    
    for (let i = 0; i < n / 2; i++) {
        const currentSum = nums[i] + nums[n - 1 - i];
        if (currentSum > maxPairSum) {
            maxPairSum = currentSum;
        }
    }
    
    return maxPairSum;
};