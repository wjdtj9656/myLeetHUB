function replaceNonCoprimes(nums) {
  const gcd = (a, b) => {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
  };
  const lcm = (a, b) => (a / gcd(a, b)) * b;

  const st = [];
  for (let x of nums) {
    let cur = x;
    while (st.length > 0) {
      const g = gcd(st[st.length - 1], cur);
      if (g === 1) break;
      cur = lcm(st.pop(), cur);
    }
    st.push(cur);
  }
  return st;
}
