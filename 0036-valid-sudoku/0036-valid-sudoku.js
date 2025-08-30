/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({length:9},()=>new Set());
    const cols = Array.from({length:9},()=>new Set());
    const boxes = Array.from({length:9},()=>new Set());

    for(let r=0;r<9; r++){
        for(let c=0; c<9; c++){
            const ch = board[r][c];
            const b = Math.floor(r/3) * 3 + Math.floor(c/3);
            if(ch === '.') continue;
            if(rows[r].has(ch)) return false;
            else rows[r].add(ch);
            if(cols[c].has(ch)) return false;
            else cols[c].add(ch);
            if(boxes[b].has(ch)) return false;
            else boxes[b].add(ch);
        }
    }
    return true;
};