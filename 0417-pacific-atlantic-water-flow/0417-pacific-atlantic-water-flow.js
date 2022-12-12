/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let [h,w] = [heights.length,heights[0].length];
    let map = new Array(h).fill(0).map(()=>[]);
    
    let atlantic = [];
    let pacific = [];
    const result = [];
    const dfs = (r,c,prev,ocean) =>{
        if(r<0 || r>=h || c<0 || c>=w) return;
        if(heights[r][c] < prev) return;
        if(ocean[r][c]) return;
        ocean[r][c] = true;
        dfs(r+1,c,heights[r][c], ocean);
        dfs(r-1,c,heights[r][c], ocean);
        dfs(r,c+1,heights[r][c], ocean);
        dfs(r,c-1,heights[r][c], ocean);
    }
    
    for(let i=0; i<h; i++){
        atlantic.push(new Array(w).fill(false));
        pacific.push(new Array(w).fill(false));
    }
    
    for(let c=0; c<w; c++){
        dfs(0, c, -10e9, pacific);
        dfs(h-1, c,-10e9, atlantic);
    }
    for(let r=0; r<h; r++){
        dfs(r, 0, -10e9, pacific);
        dfs(r, w-1,-10e9, atlantic);
    }
    for(let i=0; i<h; i++){
        for(let j=0; j<w; j++){
            if(atlantic[i][j] && pacific[i][j]) result.push([i,j]);
        }
    }
    return result;
};