/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b)=>a-b);
    s.sort((a,b) => a-b);
    let i=0, count=0;
    for(let num of s){
        if(num >= g[i]){
            count ++;
            i++;
        }
    }

    return count;
};