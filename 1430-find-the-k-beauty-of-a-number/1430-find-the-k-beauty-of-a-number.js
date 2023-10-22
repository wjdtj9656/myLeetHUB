/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let arr = [];
    let result = 0;
    for(let i=0; i<=String(num).length-k; i++){
        arr.push(Number(String(num).slice(i,i+k)));
    }
    for(let val of arr){
        if(val == 0) continue;
        if(num % val == 0) result++;
    }
    return result;
};