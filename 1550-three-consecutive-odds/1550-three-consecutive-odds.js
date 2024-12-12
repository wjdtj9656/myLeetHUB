/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
  for (let i = 0, x = new Array(3); i < arr.length; i++) {
    x[i % 3] = arr[i] % 2;
    if ('[1,1,1]' === JSON.stringify(x)) return true;
  }
  return false;
};