/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const m=9,n=9;
    const isValid = (r,c,value) =>{
        for(let i=0; i<9; i++){
            if(board[i][c] === value) return false;
        }
        for(let i=0; i<9; i++){
            if(board[r][i] === value) return false;
        }
        for(let i=0; i<9; i++){
            if(board[parseInt(r/3)*3 + parseInt(i/3)][parseInt(c/3)*3 + i%3] === value) return false;
        }
        return true;
    }
    const dfs = (r,c) =>{
        if(c === n){
            return dfs(r+1,0);
        }
        if(r === m){
            return true;
        }
        if(board[r][c] !== '.'){
            return dfs(r,c+1);
        }
        for(let i=1; i<=9; i++){
            if(!isValid(r,c,`${i}`)) continue;
            board[r][c] = `${i}`;
            if(dfs(r,c+1)) return true;
            board[r][c] = ".";
        }
        return false;
    }
    dfs(0,0);
};