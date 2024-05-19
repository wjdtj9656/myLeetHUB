/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function(room) {
    const m = room.length;
    const n = room[0].length;
    
    const visited = new Set(); 
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // R -> D -> L -> U
    
    let currRow = 0;
    let currCol = 0;
    let currDir = 0;
    
    let count = 1;
   
    room[0][0] = -1;
    
    while (!visited.has(`${currRow}#${currCol}#${currDir}`)) {
        visited.add(`${currRow}#${currCol}#${currDir}`);

        let nextRow = currRow;
        let nextCol = currCol;

        for (let i = 0; i < 4; ++i) {
            const rowDir = directions[(currDir + i) % 4][0];
            const colDir = directions[(currDir + i) % 4][1];

            const neiRow = currRow + rowDir;
            const neiCol = currCol + colDir;

            if (withinBound(neiRow, neiCol) && room[neiRow][neiCol] != 1) {
                nextRow = neiRow;
                nextCol = neiCol;
                currDir = (currDir + i) % 4;

                if (room[neiRow][neiCol] === 0) ++count; 
                room[neiRow][neiCol] = -1;

                break;
            }
        }
        currRow = nextRow;
        currCol = nextCol;
    }
    
    return count;
    

    function withinBound(row, col) {
        return row >= 0 && col >= 0 && row < m && col < n;
    }
};