function gcd(a, b) {
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

function minOperations(nums) {
  const n = nums.length;

  let ones = 0;
  for (const x of nums) if (x === 1) ones++;
  if (ones > 0) return n - ones;

  let best = Infinity;
  for (let i = 0; i < n; i++) {
    let g = 0;
    for (let j = i; j < n; j++) {
      g = g === 0 ? nums[j] : gcd(g, nums[j]);
      if (g === 1) {
        best = Math.min(best, j - i + 1);
        break; 
      }
    }
  }

  if (!isFinite(best)) return -1;

  return n + best - 2;
}
