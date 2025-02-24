var findMaxConsecutiveOnes = function(nums) {
  let left = 0; let max = 0; let zero = 0;
  for(let r=0; r<nums.length; r++){
	if(nums[r] == 0) zero++;
	while(zero > 1){
		if(nums[left] == 0) zero--;
		left++;
	}
	max = Math.max(max,r-left+1);
  }
  return max;
};