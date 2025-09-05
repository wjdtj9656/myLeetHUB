var makeTheIntegerZero = function (num1, num2) {
  const N1 = BigInt(num1);
  const N2 = BigInt(num2);
  for (let k = 1; k <= 60; k++) {
    const K = BigInt(k);
    const S = N1 - K * N2; 
    if (S < 0n) continue;
    const ones = popcountBig(S);
    if (ones <= k && K <= S) return k; 
  }
  return -1;
};

function popcountBig(x) {
  let cnt = 0;
  while (x) {
    x &= (x - 1n);   
    cnt++;
  }
  return cnt;
}
