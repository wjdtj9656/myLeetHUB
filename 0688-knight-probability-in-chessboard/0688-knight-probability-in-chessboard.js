/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    let dx = [1,1,-1,-1,2,2,-2,-2];
    let dy = [2,-2,2,-2,1,-1,1,-1];

    const map = new Map();
    const move = (cnt, x, y) =>{
        const key = `${cnt} ${x} ${y}`;

        if(x<0 || y<0 || x>=n || y>=n) return 0.0;
        if(cnt === 0) return 1.0;
        if(map.has(key)) return map.get(key);

        let result = 0;

        for(let i=0; i<8; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            result += 1/8 * move(cnt-1, nx, ny);
        }
        map.set(key, result);

        return result;
    }

    return move(k,row,column);
};