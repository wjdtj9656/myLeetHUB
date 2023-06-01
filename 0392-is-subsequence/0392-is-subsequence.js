/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let saveIndex = -1;
    for(let i=0; i<s.length; i++){
        saveIndex = t.indexOf(s[i],saveIndex+1);
        if(saveIndex == -1) return false;
    }
    return true;
};