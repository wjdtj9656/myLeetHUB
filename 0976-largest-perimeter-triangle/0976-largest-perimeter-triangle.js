function largestPerimeter(nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i + 2 < nums.length; i++) {
    const a = nums[i], b = nums[i + 1], c = nums[i + 2];
    if (a < b + c) return a + b + c;
  }
  return 0;
}
