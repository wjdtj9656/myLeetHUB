/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let maxKept = 0;
    
    for (let right = 0; right < nums.length; right++) {
        while (nums[right] > nums[left] * k) {
            left++;
        }
        maxKept = Math.max(maxKept, right - left + 1);
    }
    
    return nums.length - maxKept;
};