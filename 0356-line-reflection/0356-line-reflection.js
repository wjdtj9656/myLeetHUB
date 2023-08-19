/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) {
    const map = new Map();
    if(points.length < 2) return true;
    let minX = Infinity;
    let maxX = -Infinity
    for(let [x, y] of points){
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      map.set(`${x}-${y}`, true);
    }
    let avg = (maxX + minX)/2;
    for(let [x,y] of points){
      let mid = 2*avg - x;
      if(!map.has(`${mid}-${y}`)) return false;
    }
    return true;
};