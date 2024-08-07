/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let stack = [];
  let potentialA = [0];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack.at(-1)] > nums[i]) {
      stack.pop();
    }
    if (!stack.length) potentialA.push(i);
    stack.push(i);
  }

  stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack.at(-1)] <= nums[i]) stack.pop();
    stack.push(i);
  }

  let maxDis = 0;
  while (potentialA.length && stack.length) {
    if (nums[potentialA.at(-1)] <= nums[stack.at(-1)]) {
      maxDis = Math.max(maxDis, stack.at(-1) - potentialA.at(-1))
      potentialA.pop();
    } else stack.pop();
  }

  return maxDis;
};