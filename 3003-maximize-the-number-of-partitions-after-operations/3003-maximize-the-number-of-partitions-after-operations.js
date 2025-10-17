/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function (s, k) {
  const cache = new Map();

  const bitCount = (n) => {
    let c = 0;
    while (n) {
      n &= n - 1;
      c++;
    }
    return c;
  };

  const solve = (idx, usedMask, canFlip) => {
    if (idx === s.length) return 0;

    const key = idx + "|" + usedMask + "|" + (canFlip ? 1 : 0);
    if (cache.has(key)) return cache.get(key);

    const curBit = 1 << (s.charCodeAt(idx) - 97);
    const merged = usedMask | curBit;

    // 변경 없이 진행
    let best =
      bitCount(merged) > k
        ? 1 + solve(idx + 1, curBit, canFlip)
        : solve(idx + 1, merged, canFlip);

    // 이번 위치 한 번만 문자 변경
    if (canFlip) {
      for (let c = 0; c < 26; c++) {
        const altBit = 1 << c;
        if (altBit === curBit) continue;
        const mergedAlt = usedMask | altBit;

        const cand =
          bitCount(mergedAlt) > k
            ? 1 + solve(idx + 1, altBit, false)
            : solve(idx + 1, mergedAlt, false);

        if (cand > best) best = cand;
      }
    }

    cache.set(key, best);
    return best;
  };

  return solve(0, 0, true) + 1;
};
