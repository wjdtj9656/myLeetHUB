var findLexSmallestString = function(s, a, b) {
  const n = s.length;
  const gcd = (x, y) => y ? gcd(y, x % y) : x;
  const L = n / gcd(n, b);
  let ans = s;
  const add = (str, oddAdd, evenAdd) => {
    const arr = str.split("");
    for (let i = 0; i < n; i++) {
      const v = (arr[i].charCodeAt(0) - 48 + (i % 2 ? oddAdd : evenAdd)) % 10;
      arr[i] = String.fromCharCode(48 + v);
    }
    return arr.join("");
  };
  const rot = (str, r) => {
    r %= n;
    if (!r) return str;
    return str.slice(n - r) + str.slice(0, n - r);
  };
  for (let i = 0; i < 10; i++) {
    const oddAdd = (i * a) % 10;
    const s1 = add(s, oddAdd, 0);
    const loops = b % 2 ? 10 : 1;
    for (let j = 0; j < loops; j++) {
      const evenAdd = (j * a) % 10;
      const s2 = add(s1, 0, evenAdd);
      for (let k = 0; k < L; k++) {
        const cand = rot(s2, (k * b) % n);
        if (cand < ans) ans = cand;
      }
    }
  }
  return ans;
};
