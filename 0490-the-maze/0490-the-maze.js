/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    let m = maze.length;
    let n = maze[0].length;
    let dx = [-1,0,1,0];
    let dy = [0,-1,0,1];

    const q = [start];
    maze[start[0]][start[1]] = -1;

    while(q.length){
      let [x,y] = q.shift();
      if(x == destination[0] && y == destination[1]) return true;

      for(let i=0; i<4; i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        while(nx>=0 && ny>=0 && nx<m && ny<n && maze[nx][ny] !== 1){
          nx += dx[i];
          ny += dy[i];
        }
        nx -= dx[i];
        ny -= dy[i];

        if(maze[nx][ny] != -1){
          maze[nx][ny] = -1;
          q.push([nx,ny]);
        }
      }
    }
    return false;
};