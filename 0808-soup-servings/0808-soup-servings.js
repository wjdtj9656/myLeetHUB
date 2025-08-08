function soupServings(n) {
  if (n >= 5000) return 1.0; 
  const N = Math.ceil(n / 25);
  const memo = new Map();

  function f(a, b) {
    if (a <= 0 && b <= 0) return 0.5;
    if (a <= 0) return 1;
    if (b <= 0) return 0;

    const key = `${a},${b}`;
    if (memo.has(key)) return memo.get(key);

    const result = 0.25 * f(a - 4, b) +
                   0.25 * f(a - 3, b - 1) +
                   0.25 * f(a - 2, b - 2) +
                   0.25 * f(a - 1, b - 3);
    memo.set(key, result);
    return result;
  }

  return f(N, N);
}
