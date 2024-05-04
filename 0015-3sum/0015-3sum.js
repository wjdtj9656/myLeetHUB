/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    const set = new Set();
    const ans = [];
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        let sum = nums[i];
        let left = i+1;
        let right =nums.length-1;
        while(left < right){
            let temp = nums[left] + nums[right];
            if(temp + sum < 0){
                left++;
            }
            else if(temp + sum > 0){
                right--;
            }
            else{
                map.set(`${nums[i]},${nums[left]},${nums[right]}`,1)
                left++;
            }
        }
    }

    const res =[];
    for(let val of map.keys()){
        res.push(val.split(",").map(Number));
    }
    return res
};