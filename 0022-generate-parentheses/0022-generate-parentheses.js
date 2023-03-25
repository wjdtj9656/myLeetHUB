/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const dfs = (left,right,now,index) =>{
        if(left < right) return;
        if(index === n*2){
            if(left != right) return;
            result.push(now);
            return;
        }
        dfs(left+1,right,now+"(",index+1);
        dfs(left,right+1,now+")",index+1);
    }
    dfs(0,0,"",0);
    return result;
};