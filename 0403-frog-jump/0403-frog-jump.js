/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  if(stones[1] !== 1) return false;
  const m = stones.length;
  const dp = new Array(m).fill(-1).map(v=>new Array(m).fill(-1));
  const map = new Map();
  for(let i=0; i<stones.length; i++){
    map.set(stones[i], i);
  }
  return search(stones, m, 0, 0, dp, map);
};

const search = (stones, n, index, prevJump, dp, map) =>{
  if(index == n-1) return true;
  if(dp[index][prevJump] !== -1){
    return dp[index][prevJump] == 1;
  }
  let ans = false;
  for(let i=prevJump-1; i<=prevJump+1; i++){
    if(i > 0 && map.has(stones[index] + i)){
      ans = ans || search(stones, n, map.get(stones[index] + i), i,dp,map);
    }
  }
  dp[index][prevJump] = (ans ? 1 : 0);
  return ans;
}