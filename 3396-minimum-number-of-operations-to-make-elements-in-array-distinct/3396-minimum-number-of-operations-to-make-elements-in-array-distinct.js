/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let set = new Set(nums);
    let cnt = 0;
    while(true){
        if(set.size == nums.length){
            return cnt;
        }
        else{
            nums.shift();
            nums.shift();
            nums.shift();
            set = new Set(nums);
            cnt++;
        }
    }
};