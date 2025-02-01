/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    const n = nums.length;
    if(n <= 1) return true;

    let odd = 0;
    let even = 0;
    let prev = -1;
    for(let num of nums){
        if(num %2 == 0){
            if(prev == 0) return false;
            prev = 0;
        }else{
            if(prev == 1) return false;
            prev = 1;
        }
    }
    return true;
};