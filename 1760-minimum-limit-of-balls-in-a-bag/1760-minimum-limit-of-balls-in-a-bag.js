/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = Math.max(...nums);

    while(left < right){
        let mid = (left+right)>>1;
        let ballCnt = 0;
        for(let i=0; i<nums.length; i++){
            ballCnt += (nums[i]-1)/mid>>0;
        }
        if(ballCnt > maxOperations){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
    return left;
};
