function productQueries(n, queries) {
  const MOD = 1000000007n;
  function collectExponents(x) {
    const exp = [];
    let i = 0;
    while (x > 0) {
      if (x & 1) exp.push(i);
      x >>= 1;
      i++;
    }
    return exp;
  }
  function modPow2(sumExp) {
    let b = 2n, e = sumExp, r = 1n;
    while (e > 0n) {
      if (e & 1n) r = (r * b) % MOD;
      b = (b * b) % MOD;
      e >>= 1n;
    }
    return r;
  }
  const exp = collectExponents(n);
  const pref = new Array(exp.length);
  let run = 0n;
  for (let i = 0; i < exp.length; i++) {
    run += BigInt(exp[i]);
    pref[i] = run;
  }
  const ans = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [l, r] = queries[i];
    const sumExp = pref[r] - (l > 0 ? pref[l - 1] : 0n);
    ans[i] = Number(modPow2(sumExp));
  }
  return ans;
}
