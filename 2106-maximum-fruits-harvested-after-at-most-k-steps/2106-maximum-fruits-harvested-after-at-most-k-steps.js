function maxTotalFruits(fruits, startPos, k) {
  const n = fruits.length;
  const pos = new Array(n);
  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    pos[i] = fruits[i][0];
    prefix[i + 1] = prefix[i] + fruits[i][1];
  }

  const rangeSum = (i, j) => prefix[j + 1] - prefix[i];

  const lowerBound = (arr, target) => {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = (l + r) >>> 1;
      if (arr[m] < target) l = m + 1;
      else r = m;
    }
    return l;
  };

  const upperBound = (arr, target) => {
    let l = 0, r = arr.length;
    while (l < r) {
      const m = (l + r) >>> 1;
      if (arr[m] <= target) l = m + 1;
      else r = m;
    }
    return l;
  };

  let ans = 0;

  // Go left first, then right
  for (let i = 0; i < n; i++) {
    if (pos[i] > startPos) break;
    const leftDist = startPos - pos[i];
    if (leftDist > k) continue;
    const maxRight = startPos + (k - 2 * leftDist);
    const j = upperBound(pos, maxRight) - 1;
    if (j >= i) ans = Math.max(ans, rangeSum(i, j));
  }

  // Go right first, then left
  for (let j = n - 1; j >= 0; j--) {
    if (pos[j] < startPos) break;
    const rightDist = pos[j] - startPos;
    if (rightDist > k) continue;
    const minLeft = startPos - (k - 2 * rightDist);
    const i = lowerBound(pos, minLeft);
    if (i <= j) ans = Math.max(ans, rangeSum(i, j));
  }

  // Go only left (one way)
  const leftIdx = lowerBound(pos, startPos - k);
  const startIdx = lowerBound(pos, startPos + 1) - 1;
  if (leftIdx <= startIdx) {
    ans = Math.max(ans, rangeSum(leftIdx, startIdx));
  }

  // Go only right (one way)
  const rightIdx = upperBound(pos, startPos + k) - 1;
  const startIdx2 = lowerBound(pos, startPos);
  if (startIdx2 <= rightIdx) {
    ans = Math.max(ans, rangeSum(startIdx2, rightIdx));
  }

  return ans;
}
