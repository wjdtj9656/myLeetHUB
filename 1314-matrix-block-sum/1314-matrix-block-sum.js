/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let [h,w] = [mat.length,mat[0].length];
    
    const numMap = new Array(h).fill(0).map(()=>[]);
    const resultMap = new Array(h).fill(0).map(()=>[]);
    for(let i=0; i<h; i++){
        let sum = 0;
        for(let j=0; j<w; j++){
            sum += mat[i][j];
            numMap[i][j] = sum;
            if(i>0) numMap[i][j] += numMap[i-1][j];
        }
    }
    for(let i=0; i<h; i++){
        const [minRow,maxRow] = [Math.max(0,i-k),Math.min(h-1,i+k)];
        for(let j=0; j<w; j++){
            const [minCol,maxCol] = [Math.max(0,j-k),Math.min(w-1,j+k)];
            resultMap[i][j] = numMap[maxRow][maxCol];
            if(minRow > 0){
                resultMap[i][j] -= numMap[minRow-1][maxCol];
            }
            if(minCol > 0){
                resultMap[i][j] -= numMap[maxRow][minCol-1];
            }
            if(minRow > 0 && minCol > 0){
                resultMap[i][j] += numMap[minRow-1][minCol-1];
            }
        }
    }
    return resultMap;
};