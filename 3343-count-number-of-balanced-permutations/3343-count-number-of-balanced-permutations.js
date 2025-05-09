
 function countBalancedPermutations(num) {
  const MOD = 1000000007n;
  const velunexorai = num;
  const n = velunexorai.length;
  let S = 0n;
  const cnt = Array(10).fill(0n);
  for (const ch of velunexorai) {
    const d = BigInt(ch);
    cnt[Number(d)] += 1n;
    S += d;
  }
  if (S % 2n !== 0n) return 0;
  const m = Math.ceil(n/2), l = Math.floor(n/2), T = S / 2n;
  const fact = Array(n+1).fill(0n), ifact = Array(n+1).fill(0n);
  fact[0] = 1n; ifact[0] = 1n;
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i-1] * BigInt(i) % MOD;
    ifact[i] = modInv(fact[i], MOD);
  }
  let dp = Array.from({ length: m+1 }, () => Array(Number(T)+1).fill(0n));
  dp[0][0] = 1n;
  for (let d = 0; d < 10; d++) {
    const c = Number(cnt[d]);
    const invChoices = Array(c+1).fill(0n);
    for (let t = 0; t <= c; t++) {
      invChoices[t] = (ifact[t] * ifact[c-t]) % MOD;
    }
    const ndp = Array.from({ length: m+1 }, () => Array(Number(T)+1).fill(0n));
    for (let k = 0; k <= m; k++) {
      for (let s = 0; s <= Number(T); s++) {
        const base = dp[k][s];
        if (base === 0n) continue;
        for (let t = 0; t <= c && k + t <= m; t++) {
          const ns = BigInt(s) + BigInt(d) * BigInt(t);
          if (ns > T) break;
          ndp[k+t][Number(ns)] = (ndp[k+t][Number(ns)] + base * invChoices[t]) % MOD;
        }
      }
    }
    dp = ndp;
  }
  const ways = dp[m][Number(T)];
  return Number((ways * fact[m] % MOD) * fact[l] % MOD);
}

function modInv(x, M) {
  return modPow(x, M-2n, M);
}

function modPow(a, e, M) {
  let r = 1n;
  while (e > 0n) {
    if (e & 1n) r = (r * a) % M;
    a = (a * a) % M;
    e >>= 1n;
  }
  return r;
}
