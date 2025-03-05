var coloredCells = function(n) {
  const dp = new Array(n+1).fill(0);
dp[1] = 1;
let num = 4;
for(let i=2; i<=n; i++){
  dp[i] = dp[i-1] + num;
  num+=4;
}
return dp[n];
};