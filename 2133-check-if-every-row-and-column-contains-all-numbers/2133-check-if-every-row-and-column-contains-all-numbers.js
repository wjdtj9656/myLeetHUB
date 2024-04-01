/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(mat) {
    let R = mat.length;                                               
    let C = mat[0].length;

    for (let i = 0; i < R; i++) {
        let set = new Set();
        for (let j = 0; j < C; j++) set.add(mat[i][j]);               
        if (set.size !== C) return false;                             
    }

    for (let j = 0; j < C; j++) {
        let set = new Set();
        for (let i = 0; i < R; i++) set.add(mat[i][j]);               
        if (set.size !== R) return false;                             
    }

    return true; 
};