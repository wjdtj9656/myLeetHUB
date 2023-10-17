/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const m = rooms.length;
    const n = rooms[0].length;
    const dis = new Array(m+1).fill(Infinity).map(v=>new Array(n+1).fill(Infinity));
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];

    const q = [];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(rooms[i][j] === 0){
                q.push([i,j]);
            }
        }
    }
    while(q.length) {
        let [nx,ny] = q.shift();
        for(let i=0; i<4; i++){
            let nnx = nx + dx[i];
            let nny = ny + dy[i];
            if(nnx < 0 || nny < 0 || nnx >= m || nny >= n || rooms[nnx][nny] != 2147483647) continue;
            rooms[nnx][nny] = rooms[nx][ny]+1;
            q.push([nnx,nny]);
        }
    }
};