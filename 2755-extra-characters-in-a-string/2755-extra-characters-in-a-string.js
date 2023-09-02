/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const memo = new Map();
    const dfs = (rest) => {
        if(memo.has(rest)) return memo.get(rest);
        let maxi = 0;
        for(let i=0; i<dictionary.length; i++){
            let index = rest.indexOf(dictionary[i]);
            if(index >= 0){
                let left = rest.slice(0,index) 
                let right = rest.slice(index+dictionary[i].length,rest.length);
                const res = dfs(left) + dfs(right) + dictionary[i].length;
                maxi = Math.max(res,maxi);
            }
        }
        memo.set(rest, maxi);
        return maxi;
    }
    return s.length - dfs(s);
};