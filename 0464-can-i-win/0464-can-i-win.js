/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
  if (sum < desiredTotal) {
    return false;
  }
  if (desiredTotal <= 0) {
    return true; 
  }
  const memo = new Map();

  function canWin(used, remain) {
    if (memo.has(used)) {
      return memo.get(used);
    }
    if (remain <= 0) {
      memo.set(used, false);
      return false;
    }

    for (let i = 1; i <= maxChoosableInteger; i++) {
      const mask = 1 << (i - 1);
      if ((used & mask) !== 0) {
        continue;
      }
      if (i >= remain) {
        memo.set(used, true);
        return true;
      } else {
        const nextUsed = used | mask;
        if (!canWin(nextUsed, remain - i)) {
          memo.set(used, true);
          return true;
        }
      }
    }
    memo.set(used, false);
    return false;
  }
  return canWin(0, desiredTotal);
};