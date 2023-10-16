/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const arr = new Array(rowIndex+1).fill(1).map(v=>new Array(rowIndex+1).fill(1));
    for(let i=0; i<=rowIndex; i++){
        for(let j=1; j<i; j++){
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
        }
    }
    return arr[rowIndex]
};