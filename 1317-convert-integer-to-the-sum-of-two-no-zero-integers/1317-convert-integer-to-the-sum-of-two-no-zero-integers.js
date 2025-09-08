var getNoZeroIntegers = function(n) {
  const hasZero = (x) => String(x).includes("0");
  for (let a = 1; a < n; a++) {
    const b = n - a;
    if (!hasZero(a) && !hasZero(b)) return [a, b];
  }
};