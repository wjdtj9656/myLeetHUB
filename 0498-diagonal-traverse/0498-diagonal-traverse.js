/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const res = [];
  const arr = [];
const buckets = new Map();
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    const s = i + j;
    if (!buckets.has(s)) buckets.set(s, []);
    buckets.get(s).push(mat[i][j]); 
  }
}
for (let s = 0; s < m + n - 1; s++) {
  let bucket = buckets.get(s);
  if (s % 2 === 0) bucket.reverse();
  res.push(...bucket);
}
  return res;    
};