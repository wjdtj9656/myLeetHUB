/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const maxElement = Math.max(...nums);  
  let ans = 0;
  let start = 0;
  let maxElementsInWindow = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === maxElement) {
      maxElementsInWindow++;
    }
    while (maxElementsInWindow === k) {
      if (nums[start] === maxElement) {
        maxElementsInWindow--;
      }
      start++;
    }
    ans += start;
  }

  return ans;
};
