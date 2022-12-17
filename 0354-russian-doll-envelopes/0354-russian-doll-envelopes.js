/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const len = envelopes.length;
    const dp = [];
    envelopes.sort((a,b)=>{
        if(a[0]===b[0]) return b[1]-a[1];
        return a[0]-b[0];
    })

    for(let i=0; i<len; i++){
        let h = envelopes[i][1], left = 0, right = dp.length;
        while(left <= right){
            let mid = (left+right) >> 1;
            if(dp[mid] < h) left = mid + 1;
            else right = mid - 1;
        }
        dp[left] = h;
    }
    return dp.length;
};

