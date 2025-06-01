/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const ans = [];
    let i = 0;
    for(let word of words){
        let index = word.indexOf(x);
        if(index >= 0){
            ans.push(i);
        }
        i++;
    }
    return ans;
};