/**
 * @param {number[]} nums
 * @return {number}
 */
function countBadPairs(nums) {
  const n = nums.length;
  const totalPairs = (n * (n - 1)) / 2;
  
  const freq = new Map();
  
  for (let i = 0; i < n; i++) {
    const key = i - nums[i];
    freq.set(key, (freq.get(key) || 0) + 1);
  }
  
  let goodPairs = 0;
  for (const count of freq.values()) {
    goodPairs += (count * (count - 1)) / 2;
  }
  
  return totalPairs - goodPairs;
}