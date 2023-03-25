/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const combi = (index, now) =>{
        if(k === now.length){
            result.push(now);
            return;
        }
        for(let i=index; i<=n; i++){
            combi(i+1,[...now,i]);
        }
    }
    combi(1,[]);
    return result;
};