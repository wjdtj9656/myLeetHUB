/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    this.map = new Array(n).fill(0).map(v=>new Array(n).fill(0));
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    this.map[row][col] = player;
    let cnt = 0;
    for(let i=0; i<this.n; i++){
        if(this.map[row][i] == player) cnt++;
    }
    if(cnt ===  this.n) return player;
    cnt = 0;

    for(let i=0; i<this.n; i++){
        if(this.map[i][col] == player) cnt++;
    }
    if(cnt === this.n) return player;
    cnt = 0;

    for(let i=0; i<this.n; i++){
        if(this.map[i][i] == player) cnt++;
    }
    if(cnt === this.n) return player;
    cnt = 0;

    for(let i=0; i<this.n; i++){
        if(this.map[i][this.n-i-1] == player) cnt++;
    }
    if(cnt === this.n) return player;
    cnt = 0;
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */