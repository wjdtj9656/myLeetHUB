/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.rows[row] += (player==1? 1:-1);
    this.cols[col] += (player==1? 1:-1);
    if(row == col) this.diagonal+= (player==1? 1:-1);
    if(col == this.n-row-1) this.antiDiagonal += (player==1? 1:-1);
    if(Math.abs(this.rows[row]) == this.n || Math.abs(this.cols[col]) == this.n || Math.abs(this.diagonal) == this.n || Math.abs(this.antiDiagonal) == this.n) return player;
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */