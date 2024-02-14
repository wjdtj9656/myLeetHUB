/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const a = [];
    const b = [];
    for(let num of nums){
        if(num < 0){
            a.push(num);
        }else{
            b.push(num);
        }
    }
    let index = 0;
    const ans = [];
    for(let i=0; i<a.length; i++){
        ans.push(b[index]);
        ans.push(a[index]);
        index++;
    }
    return ans;
};