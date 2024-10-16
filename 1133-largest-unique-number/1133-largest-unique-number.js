/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
  const map = new Map()
  let max = -Infinity
  for(let n of nums){
    map.set(n, (map.get(n)||0) + 1)
  }
  for(let n of nums){
    if(map.get(n) === 1){
      max = Math.max(n, max)
    }
  }  
  return max !== -Infinity ? max : -1    
};