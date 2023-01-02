/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const len = word.length;
    const regex1 = new RegExp(`[A-Z]{${len},${len}}`,`g`);
    const regex2 = new RegExp(`[A-Z]{1,1}[a-z]{${len-1},${len-1}}`,`g`);
    const regex3 = new RegExp(`[a-z]{${len},${len}}`,`g`);
    console.log(word.match(regex3))
    if(word.match(regex1) || word.match(regex2) || word.match(regex3)) return true;
    return false;
};