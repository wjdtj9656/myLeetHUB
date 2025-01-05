function shiftingLetters(s, shifts) {
  const n = s.length;
  const diff = new Array(n + 1).fill(0);

  for (const [start, end, direction] of shifts) {
    const val = (direction === 1) ? 1 : -1;
    diff[start] += val;
    if (end + 1 < n) {
      diff[end + 1] -= val;
    }
  }

  for (let i = 1; i < n; i++) {
    diff[i] += diff[i - 1];
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    let originalCode = s.charCodeAt(i) - 97;
    let newCode = (originalCode + diff[i]) % 26;
    newCode = (newCode + 26) % 26;
    result.push(String.fromCharCode(newCode + 97));
  }

  return result.join('');
}
