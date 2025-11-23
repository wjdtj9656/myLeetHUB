/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const sum = nums.reduce((a,b)=>a+b,0);
    const arr1 = [];
    const arr2 = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 3 == 1) arr1.push(nums[i]);
        if(nums[i] % 3 == 2) arr2.push(nums[i]);
    }
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    if(sum % 3 == 1){
        if(arr2.length > 1 && arr1.length > 0){
            return sum - Math.min(arr1[0],(arr2[0]+arr2[1]));
        }
        if(arr1.length === 0) {
            if(arr2.length > 1){
                return sum - arr2[0] - arr2[1];
            }else{
                return 0;
            }
        }
        return sum - arr1[0];
    }else if(sum %3 ==2){
        if(arr1.length > 1 && arr2.length > 0){
            return sum - Math.min(arr2[0],(arr1[0]+arr1[1]));
        }
        if(arr2.length === 0) {
            if(arr1.length > 1){
                return sum - arr1[0] - arr1[1];
            }else{
                return 0;
            }
        }
        return sum - arr2[0];
    }else{
        return sum;
    }
};