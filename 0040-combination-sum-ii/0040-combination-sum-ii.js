/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result =[];
    const set = new Set();
    candidates.sort((a,b)=>a-b);
    const combi = (sum,nowArr,index) =>{
        if(sum === target){
            result.push(nowArr);
            return;
        }
        if(sum > target) return;
        if(nowArr.length > candidates.length) return;
        for(let i=index; i<candidates.length; i++){
            if (i != index && candidates[i] == candidates[i-1]) continue;
            combi(sum+candidates[i],[...nowArr,candidates[i]], i+1);
        }
    }
    combi(0,[],0);
    return result;
};