function lenLongestFibSubseq(arr) {
  const n = arr.length;
  const indexMap = new Map();
  for (let i = 0; i < n; i++) {
    indexMap.set(arr[i], i);
  }

  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  let maxLen = 0;

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      let kVal = arr[j] - arr[i];

      if (kVal < arr[i] && indexMap.has(kVal)) {
        let k = indexMap.get(kVal);
        dp[i][j] = dp[k][i] > 0 ? dp[k][i] + 1 : 3;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
  return maxLen;
}