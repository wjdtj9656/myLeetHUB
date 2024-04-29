/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const len =words.length;
    if(len === 1) return true;
    const map = new Map();
    for(let i=0; i<words.length; i++) {
        for(let j=0; j<words[i].length; j++){
            map.set(words[i][j],(map.get(words[i][j]) || 0)+1);
        }
    }

    for(let [key,value] of map.entries()){
        if(value % len != 0) {
            return false;
        }
    }
    return true;
};