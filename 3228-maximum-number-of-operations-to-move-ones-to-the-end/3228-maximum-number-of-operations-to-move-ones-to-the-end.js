function maxOperations(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0' && (i === 0 || s[i - 1] === '1')) total++;
  }
  let zeroSeen = 0, inZero = false, ones = 0, ans = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '0') {
      if (!inZero) {
        zeroSeen++;
        if (ones > 0) {
          ans += ones * (total - (zeroSeen - 1));
          ones = 0;
        }
        inZero = true;
      }
    } else {
      ones++;
      inZero = false;
    }
  }
  return ans;
}
