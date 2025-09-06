function minOperations(queries) {
  let total = 0n;
  for (const [l, r] of queries) {
    const S = F(r) - F(l - 1);   
    total += (S + 1n) >> 1n;     
  }
  return Number(total);
}

function F(x) {
  if (x <= 0) return 0n;
  const X = BigInt(x);

  let ans = 0n;
  let pow = 1n;  
  let k = 1n;    
  
  while (pow * 4n - 1n <= X) {
    const cnt = 3n * pow;     
    ans += k * cnt;
    pow *= 4n;
    k += 1n;
  }

  const lastCnt = X - pow + 1n;
  if (lastCnt > 0n) ans += k * lastCnt;

  return ans;
}
