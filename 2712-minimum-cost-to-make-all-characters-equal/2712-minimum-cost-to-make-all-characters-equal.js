/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function(s) {
    let cost = 0;
    for(let i=1;i<s.length;i++){
        if(s[i]!=s[i-1]){
            cost+=Math.min(i,s.length-i);
        }
    }
    return cost;
};