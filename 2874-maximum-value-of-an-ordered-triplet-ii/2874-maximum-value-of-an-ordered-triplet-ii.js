function maximumTripletValue(nums) {
  const n = nums.length;

  const rightMax = Array(n).fill(0);
  rightMax[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }

  let answer = 0;
  let leftMax = nums[0]; 

  for (let j = 1; j < n - 1; j++) {
    const kMax = rightMax[j + 1]; 
    const value = (leftMax - nums[j]) * kMax;
    answer = Math.max(answer, value);
    leftMax = Math.max(leftMax, nums[j]);
  }

  return answer;
}