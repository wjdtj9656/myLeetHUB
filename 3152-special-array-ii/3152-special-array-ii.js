/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
  const n = nums.length;
  if (n === 0) return queries.map(() => true);

  const check = new Array(n-1).fill(0);
  for (let i = 0; i < n-1; i++) {
    if ((nums[i] % 2) === (nums[i+1] % 2)) {
      check[i] = 1;
    } else {
      check[i] = 0;
    }
  }

  const prefix = new Array(n).fill(0);
  for (let i = 0; i < n-1; i++) {
    prefix[i] = check[i] + (i > 0 ? prefix[i-1] : 0);
  }

  return queries.map(([from, to]) => {
    if (to <= from) {
      return true;
    }
    const wrongPairs = prefix[to-1] - (from > 0 ? prefix[from-1] : 0);
    return wrongPairs === 0;
  });
};