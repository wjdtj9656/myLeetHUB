/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    
    const m = matrix.length;
    const n = matrix[0].length;
    this.matrix = matrix;
    this.m = m;
    this.n = n;
    const sum = new Array(m).fill(0).map(v=>new Array(n).fill(0));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            sum[i][j] = (sum[i-1]?.[j] || 0) + (sum[i]?.[j-1] || 0) + matrix[i][j] - (sum[i-1]?.[j-1] || 0); 
        }
    }
    this.sum = sum;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    for(let i=row; i<this.m; i++){
        for(let j=col; j<this.n; j++){
            this.sum[i][j] -= (this.matrix[row][col] - val);
        }
    }
    this.matrix[row][col] = val;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.sum[row2][col2] + (this.sum[row1-1]?.[col1-1] || 0) - (this.sum[row1-1]?.[col2] || 0) - (this.sum[row2]?.[col1-1] || 0);
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */