function maximumUniqueSubarray(nums) {
  let seen = new Set(), left = 0, sum = 0, maxSum = 0;
  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      sum -= nums[left++];
    }
    seen.add(nums[right]);
    sum += nums[right];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
}
