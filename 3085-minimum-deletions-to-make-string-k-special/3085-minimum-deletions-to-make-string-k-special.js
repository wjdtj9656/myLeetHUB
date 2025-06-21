/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
function minimumDeletions(word, k) {
  const freq = new Array(26).fill(0);
  for (let ch of word) {
    freq[ch.charCodeAt(0) - 97]++;
  }
  const counts = freq.filter(f => f > 0);
  const total = word.length;
  let result = total;
  const maxFreq = Math.max(...counts);

  for (let fMin = 1; fMin <= maxFreq; fMin++) {
    const fMax = fMin + k;
    let keep = 0;
    for (let f of counts) {
      if (f >= fMin) {
        keep += Math.min(f, fMax);
      }
    }
    result = Math.min(result, total - keep);
  }

  return result;
}
