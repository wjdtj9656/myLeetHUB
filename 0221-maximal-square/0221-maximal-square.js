/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const sumArr = new Array(m).fill(0).map(v=>new Array(n).fill(0));
    const small = m>n? n:m;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            sumArr[i][j] = Number(matrix[i][j]) + (Number(sumArr[i-1]?.[j]) || 0) + (Number(sumArr[i][j-1]) || 0) - (Number(sumArr[i-1]?.[j-1]) || 0); 
        }
    }
    let result = 0;
    const search = (num) =>{
        for(let i=num-1; i<m; i++){
            for(let j=num-1; j<n; j++){
                let sum = sumArr[i][j] - (sumArr[i-num]?.[j] || 0) - (sumArr[i]?.[j-num] || 0) + (sumArr[i-num]?.[j-num] || 0);
                if(sum == num*num) {
                    result = Math.max(result, sum); 
                }
            }
        }
    }
    for(let i=1; i<=small; i++){
        search(i);
    }
    return result;
};