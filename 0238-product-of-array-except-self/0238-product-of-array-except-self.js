/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCnt = 0;
    let zeroIndex =[];
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0){
            zeroCnt++;
            zeroIndex.push(i);
        }
    }
    if(zeroCnt == 0){
        let sum = nums.reduce((a,b)=>a*b,1);
        const arr = new Array(nums.length).fill(sum);
        for(let i=0; i<arr.length; i++){
            arr[i] /= nums[i];
        }
        return arr;
    }
    else if(zeroCnt == 1){
        let sum = nums.reduce((a,b)=>{
            if(b != 0){
                return a*b;
            }
            return a;
        },1);
        const result = new Array(nums.length).fill(0);
        result[zeroIndex] = sum;
        return result;
    }
    else{
        return new Array(nums.length).fill(0);
    }
};