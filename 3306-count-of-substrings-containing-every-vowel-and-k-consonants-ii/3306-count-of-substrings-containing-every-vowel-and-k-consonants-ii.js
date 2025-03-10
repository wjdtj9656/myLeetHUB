/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
  const n = word.length;
  const cons = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const ch = word[i];
    if ("aeiou".indexOf(ch) === -1) {
      cons[i + 1] = cons[i] + 1;
    } else {
      cons[i + 1] = cons[i];
    }
  }
  
  const lastOccurrence = { a: -1, e: -1, i: -1, o: -1, u: -1 };
  
  let result = 0;
  const freq = new Array(n + 1).fill(0);
  let p = 0; 
  
  for (let j = 0; j < n; j++) {
    const ch = word[j];
    if ("aeiou".indexOf(ch) !== -1) {
      lastOccurrence[ch] = j;
    }
    if (
      lastOccurrence.a === -1 ||
      lastOccurrence.e === -1 ||
      lastOccurrence.i === -1 ||
      lastOccurrence.o === -1 ||
      lastOccurrence.u === -1
    ) {
      continue;
    }
    const L = Math.min(
      lastOccurrence.a,
      lastOccurrence.e,
      lastOccurrence.i,
      lastOccurrence.o,
      lastOccurrence.u
    );
    while (p <= L) {
      freq[cons[p]]++;
      p++;
    }
    const target = cons[j + 1] - k;
    result += freq[target] || 0;
  }
  return result;
};
