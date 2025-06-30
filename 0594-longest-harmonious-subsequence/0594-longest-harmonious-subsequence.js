
var findLHS = function(nums) {
    const map = {};
    for(let i=0; i<nums.length; i++){
      map[nums[i]] = (map[nums[i]] || 0)+1;
    }
    let max = 0;
    for(let num in map){
      if(!map[parseInt(num)+1]) continue;
      max = Math.max(max,map[num] + (map[parseInt(num)+1] || 0));
    }
    return max
};