/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const map = {};
    const n = tops.length;
    for(let i=0; i<n; i++){
        map[tops[i]] = (map[tops[i]] || 0) + 1;
    }
    for(let i=0; i<n; i++){
        map[bottoms[i]] = (map[bottoms[i]] || 0) + 1;
    }
    const arr = [];
    for(let [key,value] of Object.entries(map)){
        if(value >= n){
            arr.push(key);
        }
    }
    const ans = {};
    let res = 10e9;
    for(let num of arr){
        let t = 0;
        let b = 0;
        for(let i=0; i<n; i++){
            if(tops[i] != num){
                t++;
            }
            if(bottoms[i] != num){
                b++;
            }
            if(tops[i] == num || bottoms[i] == num){
            }
            else{
                break;
            }
            if(i==n-1){
                res = Math.min(res, t,b);
            }
        }
    }
    return res ==10e9? -1:res;
};