/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {

    if(matrix.length === 0) return 0;
    
    let max = 0;
	
    const map = new Map(); // key, value => i|j, count
    
    const isOutside = (i, j) => i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length;
    
    const dfs = (i, j, prev) => {
        
        const key = `${i}|${j}`;
        
        if(isOutside(i, j) || matrix[i][j] <= prev) return 0;
        if(map.has(key)) return map.get(key);
        
        const num = matrix[i][j];
        
        const l = dfs(i, j - 1, num);
        const r = dfs(i, j + 1, num);
        const t = dfs(i - 1, j, num);
        const d = dfs(i + 1, j, num);

        map.set(key, Math.max(l, r, t, d) + 1);
        max = Math.max(max, map.get(key));
        
        return map.get(key);
        
    };
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            const key = `${i}|${j}`;
            if(!map.has(key)) dfs(i, j, -Number.MAX_VALUE);
        }
    }
    
    return max;
};