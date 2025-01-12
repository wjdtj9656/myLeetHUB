/**
 * @param {string} s - 괄호 문자열
 * @param {string} locked - 0 또는 1로 이루어진 문자열 (길이는 s와 동일)
 * @return {boolean}
 */
function canBeValid(s, locked) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }

  let minOpen = 0;
  let maxOpen = 0;
  for (let i = 0; i < n; i++) {
    if (locked[i] === '1') {
      if (s[i] === '(') {
        minOpen++;
        maxOpen++;
      } else {
        minOpen--;
        maxOpen--;
      }
    } else {
      minOpen--;
      maxOpen++;
    }

    if (maxOpen < 0) {
      return false;
    }

    if (minOpen < 0) {
      minOpen = 0;
    }
  }
  return minOpen === 0;
}
