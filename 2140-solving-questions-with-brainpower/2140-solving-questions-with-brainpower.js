var mostPoints = function(questions) {
    const n = questions.length;
    const dp = new Array(n+1).fill(0);

    for(let i=n-1; i>=0; i--){
        const [point,bPoint] = questions[i];
        const next = i + bPoint + 1;
        const value = point + (next < n? dp[next] : 0);
        const skip = dp[i+1];
        dp[i] = Math.max(value,skip);
    }
    return dp[0];
};