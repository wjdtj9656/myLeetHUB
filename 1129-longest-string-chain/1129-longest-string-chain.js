/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let w = new Array(17).fill(0).map(()=>new Set());
    for(let i=0; i<words.length; ++i){
        w[words[i].length].add(words[i]);
    }

    let dp = new Map();
    let result = 1;
    for(let i=16; i; i--){
        if(!w[i-1].size) continue;
        for(let word of w[i]){
            let val = dp.get(word) || 1;
            for(let j=0; j<word.length; j++){
                let str = word.slice(0,j) + word.slice(j+1);
                if(w[i-1].has(str) && val >= (dp.get(str) || 1)){
                    dp.set(str,val+1);
                    result = Math.max(result, val+1);
                }
            }
        }
    }
    return result;
};