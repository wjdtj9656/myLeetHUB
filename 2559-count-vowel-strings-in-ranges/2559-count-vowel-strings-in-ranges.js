/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const dp = new Array(words.length).fill(0);
    const set = new Set(["a","e","i","o","u"]);
    const result = [];
    
    //dp[0]값을 구해줘야해서 if문이 좀 나뉘었음
    for(let i=0; i<words.length; i++){
        if(set.has(words[i][0]) && set.has(words[i][words[i].length-1])){
            if(i !== 0) dp[i] = dp[i-1] + 1;
            else dp[i] = 1;
        }
        else{
            if(i !== 0) dp[i] = dp[i-1];
            else dp[i] = 0;
        }
    }
    //start-1이 0일떄는 dp[-1]을 참조하게 되므로 주의
    for(let query of queries){
        let [start, end] = query
        start -= 1;
        if(start<0) result.push(dp[end]);
        else result.push(dp[end] - dp[start]);
    }
    
    return result;
};