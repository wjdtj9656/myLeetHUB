/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let now1 = -1;
    let now2 = -1;
    let result = Infinity;
    if(word1 !== word2)
    for(let i=0; i<wordsDict.length; i++){
        if(wordsDict[i] === word1){
            now1 = i;
            if(now2 !== -1) result = Math.min(result, Math.abs(now2-now1));
        }
        else if(wordsDict[i] === word2){
            now2 = i;
            if(now1 !== -1) result = Math.min(result, Math.abs(now2-now1));
        }
    }
    else{
        let flag = false;
        for(let i=0; i<wordsDict.length; i++){
            if(flag && wordsDict[i] === word1){
                now1 = i;
                if(now2 !== -1) result = Math.min(result, Math.abs(now2-now1));
                flag = !flag;
            }
            else if(!flag && wordsDict[i] === word2){
                now2 = i;
                if(now1 !== -1) result = Math.min(result, Math.abs(now2-now1));
                flag = !flag;
            }
        }
    }
    return result;
};