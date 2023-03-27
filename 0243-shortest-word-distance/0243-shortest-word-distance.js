/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let result = Infinity;
    for(let i=0; i<wordsDict.length; i++){
        if(wordsDict[i] === word1){
            index1 = i;
        }
        if(wordsDict[i] === word2){
            index2 = i;
        }
        if(index1 !== -1 && index2 !== -1) result = Math.min(result, Math.abs(index1-index2));
    }
    return result;
};