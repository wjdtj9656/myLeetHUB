/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const len = stones.length;
  const dp = new Array(len).fill(-1).map(v=>new Array(len).fill(-1));
  const map = new Map();
  for(let i=0; i<len; i++){
    map.set(stones[i],i);
  }
  return search(stones, len, 0, 0, map, dp);
};

const search = (stones, len, index, prevJump, map, dp) =>{
  if(index == len-1) return true;
  if(dp[index][prevJump] !== -1){
    return dp[index][prevJump] == 1;
  }
  let ans = false;
  for(let i=prevJump-1; i<=prevJump+1; i++){
    if(i > 0 && map.has(stones[index] + i)){
      ans = ans || search(stones, len, map.get(stones[index] + i), i, map, dp);
    }
  }
  dp[index][prevJump] = ans;
  return ans;
}








