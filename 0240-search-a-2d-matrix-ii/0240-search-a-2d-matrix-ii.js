
var searchMatrix = function(matrix, target) {
    
    const m = matrix.length;
    const n = matrix[0].length;
    let status = false;
    const dfs = (x,y) =>{
        if(x < 0 || y < 0 || x >= m || y >= n ||matrix[x][y] == Infinity) return false;
        if(matrix[x][y] > target) return false;
        if(matrix[x][y] == target) {
            return true;
        }
        matrix[x][y] = Infinity;
        if(dfs(x, y+1)) return true;
        if(dfs(x+1, y)) return true;
        return false;
    }
    return dfs(0,0);
};