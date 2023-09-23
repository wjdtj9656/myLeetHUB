/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums);
		let right = nums.reduce((a,b)=>a+b,0);
		let ans = 0;

		while(left < right){
			let mid = (left+right)>>1;
			if(can(nums, mid, k)){
				right = mid;
			}
			else {
				left = mid + 1;
			}
		}
		return left;
};

const can = (nums, mid, k) =>{
	let part = 1;
	let sum = 0;
	for(let i=0; i<nums.length; ++i){
		sum += nums[i];
		if(sum > mid){
			part++;
			sum = nums[i];
		}
	}
	return part <= k;
}