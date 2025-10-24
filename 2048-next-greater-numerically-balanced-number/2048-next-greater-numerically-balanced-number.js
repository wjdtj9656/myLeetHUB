function nextBeautifulNumber(n) {
  function isBalanced(x) {
    const cnt = Array(10).fill(0);
    let y = x;
    while (y > 0) {
      const d = y % 10;
      if (d === 0) return false;
      cnt[d]++;
      y = (y / 10) | 0;
    }
    for (let d = 1; d <= 9; d++) {
      if (cnt[d] !== 0 && cnt[d] !== d) return false;
    }
    return true;
  }
  let x = n + 1;
  while (true) {
    if (isBalanced(x)) return x;
    x++;
  }
}
