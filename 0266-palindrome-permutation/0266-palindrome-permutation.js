/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const set = new Set();
    for(let char of s){
        if(!set.has(char)) set.add(char);
        else set.delete(char);
    }
    return set.size == 0 || set.size == 1;
};