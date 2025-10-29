
function smallestNumber(n) {
  const k = Math.ceil(Math.log2(n + 1));
  return (1 << k) - 1;
}