/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let min = Math.min(...nums);
    let index = nums.indexOf(min);
    let len = nums.length;
    let cnt = 0;
    for(let i=len-1; i>index; i--){
        if(min == nums[i]){
            nums.pop();
            cnt++;
        }
    }
    len -= cnt;
    for(let i=index; i<len; i++){
        if(min <= nums[i]){
            min = nums[i];
        }else{
            return false;
        }
    }
    console.log(min)
    for(let i=0; i<index; i++){
        if(min <= nums[i]){
            min = nums[i];
        }else{
            return false;
        }       
    }
    return true;
};