/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    let ans = 0;
    let len = nums.length-1;

    for(let i=len-1; i>=0; i--){
      if(nums[i] <= nums[i+1]) continue;
      let num = (nums[i] + nums[i+1] -1) / nums[i+1] >> 0;
      ans += num-1;
      nums[i] = (nums[i] / num)>>0;
    }
    return ans;
};