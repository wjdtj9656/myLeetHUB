/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dict) {
    const memo = new Map();
    const search = (rest) =>{
        if(memo.has(rest)) return memo.get(rest);
        let max = 0;
        for(let i=0; i<dict.length; i++){
            const index = rest.indexOf(dict[i]);
            if(index >= 0){
                let left = rest.slice(0, index);
                let right = rest.slice(index+dict[i].length, rest.length);
                const res = search(left) + search(right) + dict[i].length;
                max = Math.max(max, res);
            }
        }
        memo.set(rest,max);
        return max;
    }
    return s.length - search(s);
};