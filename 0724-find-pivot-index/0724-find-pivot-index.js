/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumArr1 = [0];
    let sumArr2 = [0];
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i<nums.length-1; i++){
        sum1 += nums[i];
        sumArr1.push(sum1);
        sum2 += nums[nums.length-i-1];
        sumArr2.push(sum2);
    }
    sumArr2 = sumArr2.reverse();
    
    for(let i=0; i<sumArr1.length; i++){
        if(sumArr1[i] == sumArr2[i]) return i;
    }
    return -1;
};