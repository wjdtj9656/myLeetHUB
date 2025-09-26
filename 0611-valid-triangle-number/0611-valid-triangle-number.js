function triangleNumber(nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length, ans = 0;
  for (let k = n - 1; k >= 2; k--) {
    let i = 0, j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        ans += j - i;
        j--;
      } else {
        i++;
      }
    }
  }
  return ans;
}
