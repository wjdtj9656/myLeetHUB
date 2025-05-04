/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const map = {};
    const n = dominoes.length;
    let res = 0;
    for(let i=0; i<n; i++){
        let [a,b] = dominoes[i];
        if(a > b) [a,b] = [b,a];
        map[`${a}-${b}`] = (map[`${a}-${b}`] || 0)+1; 
    }
    for(let [key,val] of Object.entries(map)){
        if(val > 1){
            res += Math.floor((val*(val-1))/2);
        }
    }
    return res;
};