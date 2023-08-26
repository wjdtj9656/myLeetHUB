/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
    pairs.sort((a,b) => a[1] - b[1]);
    let now = pairs[0];
    let cnt = 1;
    for(let i=1; i<pairs.length; i++){
      if(now[1] < pairs[i][0]){
        cnt++;
        now = pairs[i];
      }
    }
    return cnt
};