/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0) return [];
    const res = [];
    let index = 0;
    let q = [];
    while(index < nums.length){
        if(q.length == 0){
            q.push(nums[index++]);
            continue;
        }else{
            if(q[q.length-1] +1 == nums[index]){
                q.push(nums[index++]);
            }else{
                res.push(q);
                q = [nums[index++]];
            }
        }
    }
    const ans = [];
    for(let i=0; i<res.length; i++){
        if(res[i].length == 1){
            ans.push(`${res[i][0]}`);
        }else{
            ans.push(`${res[i][0]}->${res[i][res[i].length-1]}`)
        }
    }
    if(q.length == 1){
        ans.push(`${q[0]}`);
    }else{
        ans.push(`${q[0]}->${q[q.length-1]}`);
    }
    return ans;
};