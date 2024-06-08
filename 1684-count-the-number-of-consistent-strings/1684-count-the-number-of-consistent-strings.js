/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let set = new Set(allowed)
  return words.reduce((a, w) => {
    return w.split('').every(l => set.has(l)) ? ++a : a
  }, 0)    
};