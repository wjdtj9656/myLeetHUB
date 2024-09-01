/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    const arr = [];
    let index= 0;
    if(original.length != m*n){
        return [];
    }
    for(let i=0; i<m; i++){
        const temp = [];
        for(let j=0; j<n; j++){
            temp.push(original[index++]);
        }
        arr.push(temp);
    }
    return arr;
};