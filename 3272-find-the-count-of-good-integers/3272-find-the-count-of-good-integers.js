
function countGoodIntegers(n, k) {
  const validFreqMap = new Map();
  const factorial = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  function addFrequency(numStr) {
    const freq = Array(10).fill(0);
    for (let ch of numStr) {
      freq[parseInt(ch)]++;
    }
    const key = freq.join(",");
    if (!validFreqMap.has(key)) {
      validFreqMap.set(key, freq);
    }
  }

  if (n % 2 === 0) {
    const m = n / 2;
    const start = Math.pow(10, m - 1);
    const end = Math.pow(10, m) - 1;
    for (let half = start; half <= end; half++) {
      const halfStr = half.toString();
      const palStr = halfStr + halfStr.split("").reverse().join("");
      if (parseInt(palStr, 10) % k === 0) {
        addFrequency(palStr);
      }
    }
  } else {
    const m = Math.floor(n / 2);
    if (m === 0) {
      for (let d = 1; d <= 9; d++) {
        const palStr = d.toString();
        if (d % k === 0) {
          addFrequency(palStr);
        }
      }
    } else {
      const start = Math.pow(10, m - 1);
      const end = Math.pow(10, m) - 1;
      for (let half = start; half <= end; half++) {
        const halfStr = half.toString();
        const revHalf = halfStr.split("").reverse().join("");
        for (let mid = 0; mid <= 9; mid++) {
          const palStr = halfStr + mid.toString() + revHalf;
          if (parseInt(palStr, 10) % k === 0) {
            addFrequency(palStr);
          }
        }
      }
    }
  }

  let totalGood = 0;
  for (let [_, freq] of validFreqMap) {
    let totalPermutations = factorial[n];
    for (let count of freq) {
      totalPermutations /= factorial[count];
    }
    let invalid = 0;
    if (freq[0] > 0) {
      let numerator = factorial[n - 1];
      let denominator = factorial[freq[0] - 1];
      for (let d = 1; d < 10; d++) {
        denominator *= factorial[freq[d]];
      }
      invalid = numerator / denominator;
    }
    totalGood += totalPermutations - invalid;
  }

  return totalGood;
}