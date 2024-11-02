/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let xorResult = start ^ goal;
    let ans = 0;
    
    while (xorResult > 0) {
        ans += xorResult & 1;  
        xorResult >>= 1;        
    }
    
    return ans;   
};