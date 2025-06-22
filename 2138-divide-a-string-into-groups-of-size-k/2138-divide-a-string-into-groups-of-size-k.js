/**
 * @param {string} s
 * @param {number} k
 * @param {string} fill
 * @return {string[]}
 */
function divideString(s, k, fill) {
  const groups = [];
  for (let i = 0; i < s.length; i += k) {
    let chunk = s.slice(i, i + k);
    if (chunk.length < k) {
      chunk += fill.repeat(k - chunk.length);
    }
    groups.push(chunk);
  }
  return groups;
}
