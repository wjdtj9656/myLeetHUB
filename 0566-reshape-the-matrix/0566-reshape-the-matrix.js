/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const result = new Array(r).fill(0).map(v=>new Array(c).fill(0));
    const m = mat.length;
    const n = mat[0].length;
    if(m*n != r*c) return mat;
    const nums = mat.flat();
    let index = 0;
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){
            result[i][j] = nums[index++];
        }
    }
    return result;
};