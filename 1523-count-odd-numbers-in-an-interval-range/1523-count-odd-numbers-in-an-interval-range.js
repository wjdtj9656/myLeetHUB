/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let ans = 0;
    if(low === high){
        if(low %2 ==1) return 1;
        else return 0;
    }
    if(low %2 ==1){
        ans++;
        low+=1;
    }
    if(high %2 === 1){
        ans++;
        high-=1;
    }
    return ans + Math.floor((high - low)/2);
};