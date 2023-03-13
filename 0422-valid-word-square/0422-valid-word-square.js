/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    const len = words.length;
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(len <= i || len <= j) return false;
            if(words[i][j] !== words[j][i]) return false
        }
    }
    return true;
};