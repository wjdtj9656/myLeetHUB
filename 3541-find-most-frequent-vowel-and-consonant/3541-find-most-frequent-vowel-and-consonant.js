/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const freq ={};
    let max1 = 0;
    let max2 = 0;
    const set = new Set(['a','e','i','o','u']);
    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
        if(set.has(ch)){
            max1 = Math.max(max1,freq[ch]);
        }else{
            max2 = Math.max(max2,freq[ch]);
        }
    }
    return max1+max2;
};