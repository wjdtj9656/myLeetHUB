/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let obj = {}
  let sum = 0
  
  for(let num of nums){
    if(obj[num] === undefined){
      sum += num
      obj[num] = 1
    }else if(obj[num] === 1){
      sum -= num
      obj[num] = -1
    }
  }
  
  return sum   
};