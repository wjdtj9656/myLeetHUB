/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
  const o1 = Math.ceil(n / 2), e1 = Math.floor(n / 2);
  const o2 = Math.ceil(m / 2), e2 = Math.floor(m / 2);
  return o1 * e2 + e1 * o2;    
};