/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const totalRemainder = nums.reduce((acc, num) => (acc + num) % p, 0);
    if (totalRemainder === 0) return 0;

    const map = {};
    map[0] = -1;
    let csum = 0;
    let min = nums.length;
    
    for(let i=0; i<nums.length; i++){
        csum = (csum + nums[i]) % p;
        let need = (csum - totalRemainder + p) % p;
        if(map[need] != undefined){
            min = Math.min(min, i - map[need]);
        }
        map[csum] = i;
    }
    return min < nums.length ? min : -1;
};