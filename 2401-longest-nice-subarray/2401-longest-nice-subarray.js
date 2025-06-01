function longestNiceSubarray(nums) {
  let left = 0;
  let mask = 0;    
  let maxLen = 0;  

  for (let right = 0; right < nums.length; right++) {
    while ((mask & nums[right]) !== 0) {
      mask &= ~nums[left];
      left++;
    }
    mask |= nums[right];
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}