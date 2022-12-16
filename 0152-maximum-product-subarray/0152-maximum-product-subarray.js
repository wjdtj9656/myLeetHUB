/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let min = nums[0];
    let max = nums[0];
    let result = nums[0];
    for(let i=1; i<nums.length; i++){
        let curMax = Math.max(max * nums[i], nums[i], min * nums[i]);
        let curMin = Math.min(min * nums[i], nums[i], max * nums[i]);
        min = curMin;
        max = curMax;
        result = Math.max(result, max);
    }
    return result;
};