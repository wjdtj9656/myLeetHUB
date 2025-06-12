/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = -Infinity;
    const n = nums.length;
    for(let i=0; i<n-1; i++){
        max = Math.max(max, Math.abs(nums[i+1] - nums[i]));
    }
    max = Math.max(max, Math.abs(nums[n-1] - nums[0]));
    return max
};