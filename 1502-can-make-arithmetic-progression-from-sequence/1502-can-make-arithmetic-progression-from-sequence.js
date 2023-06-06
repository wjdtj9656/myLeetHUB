/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    let value = arr[1] - arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] - arr[i-1] !== value) return false; 
    }
    return true;
};