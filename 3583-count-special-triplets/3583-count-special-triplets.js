function specialTriplets(nums) {
  const MOD = 1000000007;
  const rightFreq = new Map();
  for (const x of nums) {
    rightFreq.set(x, (rightFreq.get(x) || 0) + 1);
  }

  const leftFreq = new Map();
  let ans = 0;

  for (let j = 0; j < nums.length; j++) {
    const mid = nums[j];
    rightFreq.set(mid, rightFreq.get(mid) - 1);

    const target = mid * 2;
    const leftCount = leftFreq.get(target) || 0;
    const rightCount = rightFreq.get(target) || 0;

    ans = (ans + (leftCount * rightCount) % MOD) % MOD;

    leftFreq.set(mid, (leftFreq.get(mid) || 0) + 1);
  }

  return ans;
}
