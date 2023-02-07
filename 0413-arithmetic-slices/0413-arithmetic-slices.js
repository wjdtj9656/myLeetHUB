/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const dp = new Array(nums.length).fill(0);
    let result = 0;
    for(let i=2; i<nums.length; i++){
        if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]){
            dp[i] = 1 + dp[i-1];
            result += dp[i];
        }
    }
    return result
};