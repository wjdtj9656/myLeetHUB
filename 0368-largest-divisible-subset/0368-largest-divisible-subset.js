/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
    nums.sort((a,b)=>a-b);
    const n = nums.length;
    const dp = new Array(n).fill(0);
    const prev = new Array(n).fill(-1);
    let maxIndex = -1;
    let max = -1;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(nums[j] % nums[i] == 0){
                if(dp[j] < dp[i]+1){
                    dp[j] = dp[i]+1;
                    prev[j] = i;
                }
            }
        }
    }
    for(let i=0; i<dp.length; i++){
        if(dp[i] > max){
            max = dp[i];
            maxIndex = i;
        }
    }
    const answer = [];
    while(maxIndex != -1){
        answer.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }
    if(answer.length == 0) return [nums[0]];
    return answer.reverse();
};