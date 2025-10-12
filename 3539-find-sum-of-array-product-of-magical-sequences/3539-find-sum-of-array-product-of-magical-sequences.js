function magicalSum(m, k, nums) {
  const MOD = 1000000007n;
  const n = nums.length;
  const A = nums.map(x => BigInt(x));
  const fact = Array(m + 1).fill(0n);
  const invfact = Array(m + 1).fill(0n);
  function modPow(a, e) {
    let x = a % MOD, r = 1n, b = BigInt(e);
    while (b > 0n) {
      if (b & 1n) r = (r * x) % MOD;
      x = (x * x) % MOD;
      b >>= 1n;
    }
    return r;
  }
  fact[0] = 1n;
  for (let i = 1; i <= m; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
  invfact[m] = modPow(fact[m], MOD - 2n);
  for (let i = m; i > 0; i--) invfact[i - 1] = (invfact[i] * BigInt(i)) % MOD;
  function C(nv, rv) {
    if (rv < 0 || rv > nv) return 0n;
    return (((fact[nv] * invfact[rv]) % MOD) * invfact[nv - rv]) % MOD;
  }
  const powNum = Array.from({ length: n }, () => Array(m + 1).fill(0n));
  for (let i = 0; i < n; i++) {
    powNum[i][0] = 1n;
    for (let c = 1; c <= m; c++) powNum[i][c] = (powNum[i][c - 1] * A[i]) % MOD;
  }
  const idx = (u, r, o) => ((u * (m + 1) + r) * (k + 1) + o);
  const SIZE = (m + 1) * (m + 1) * (k + 1);
  let dp = Array(SIZE).fill(0n);
  dp[idx(0, 0, 0)] = 1n;
  for (let pos = 0; pos < n; pos++) {
    let ndp = Array(SIZE).fill(0n);
    for (let used = 0; used <= m; used++) {
      const rem = m - used;
      for (let carry = 0; carry <= m; carry++) {
        for (let ones = 0; ones <= k; ones++) {
          const v = dp[idx(used, carry, ones)];
          if (v === 0n) continue;
          for (let c = 0; c <= rem; c++) {
            const b = (c + carry) & 1;
            const newOnes = ones + b;
            if (newOnes > k) continue;
            const newUsed = used + c;
            const newCarry = Math.floor((c + carry) / 2);
            const w = (C(rem, c) * powNum[pos][c]) % MOD;
            const add = (v * w) % MOD;
            const id = idx(newUsed, newCarry, newOnes);
            ndp[id] = (ndp[id] + add) % MOD;
          }
        }
      }
    }
    dp = ndp;
  }
  function pc(x) {
    let t = x, c = 0;
    while (t) { c += t & 1; t >>= 1; }
    return c;
  }
  let ans = 0n;
  for (let carry = 0; carry <= m; carry++) {
    const extra = pc(carry);
    for (let ones = 0; ones <= k; ones++) {
      if (ones + extra !== k) continue;
      ans = (ans + dp[idx(m, carry, ones)]) % MOD;
    }
  }
  return Number(ans);
}
