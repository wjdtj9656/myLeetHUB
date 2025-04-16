function countGood(nums, k) {
  const n = nums.length;
  const totalSubarrays = (n * (n + 1)) / 2;

  function countAtMost(x) {
    let count = 0;
    let left = 0;
    let pairs = 0;
    const freq = new Map();

    for (let right = 0; right < n; right++) {
      const num = nums[right];
      let currentFreq = freq.get(num) || 0;
      pairs += currentFreq;
      freq.set(num, currentFreq + 1);

      while (pairs > x) {
        const leftNum = nums[left];
        const leftFreq = freq.get(leftNum);
        freq.set(leftNum, leftFreq - 1);
        pairs -= (leftFreq - 1);
        left++;
      }

      count += (right - left + 1);
    }
    return count;
  }
  return totalSubarrays - countAtMost(k - 1);
}