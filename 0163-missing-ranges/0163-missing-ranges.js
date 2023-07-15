/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    const temp = [];
    if (diff === 2) {
        temp.push(nums[i-1]+1);
        temp.push(nums[i-1]+1);
    } else if (diff > 2) {
        temp.push(nums[i-1]+1);
        temp.push(nums[i]-1);
    }
      if(temp.length) res.push(temp);
  }
    return res;
};