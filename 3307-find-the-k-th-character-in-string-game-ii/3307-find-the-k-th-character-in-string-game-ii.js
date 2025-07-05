function kthCharacter(k, operations) {
  const n = operations.length;
  const initialK = BigInt(k);
  const len = [1n];
  for (let i = 0; i < n; i++) {
    let l = len[i] * 2n;
    if (l > initialK) l = initialK;
    len.push(l);
  }
  let idx = initialK;
  let shift = 0;
  for (let i = n - 1; i >= 0; i--) {
    const L = len[i];
    if (idx > L) {
      idx -= L;
      if (operations[i] === 1) shift = (shift + 1) % 26;
    }
  }
  const code = (shift) % 26;
  return String.fromCharCode('a'.charCodeAt(0) + code);
}
