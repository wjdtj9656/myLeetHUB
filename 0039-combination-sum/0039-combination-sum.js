/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    const res = [];
    const arr = [];
    if(candidates[0] > target) return [];
    const len = candidates.length;
    const search = (idx, target) =>{
        if(target == 0){
            res.push(arr.slice());
            return;
        }
        if(target < 0) return;
        if(len == idx) return;
        arr.push(candidates[idx]);
        search(idx, target-candidates[idx]);
        arr.pop();
        search(idx+1, target);
    }
    search(0,target);
    return res;
};