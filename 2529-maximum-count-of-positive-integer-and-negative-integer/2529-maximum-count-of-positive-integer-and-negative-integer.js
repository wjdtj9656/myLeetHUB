/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
	let cnt1 = 0;
	let cnt2 = 0;
	nums.forEach((v)=>{
		if(v < 0) cnt1++;
		else if(v > 0) cnt2++;
	})
	return Math.max(cnt1, cnt2);
};