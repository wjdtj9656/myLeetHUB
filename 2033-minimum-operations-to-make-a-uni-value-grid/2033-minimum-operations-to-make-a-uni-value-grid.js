var minOperations = function(grid, x) {
    const flat = [];
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            flat.push(grid[i][j]);
        }
    }
    const mod = flat[0] % x;
    for(let num of flat){
        if(num % x != mod){
            return -1;
        }
    }
    let ans = 0;
    flat.sort((a,b)=>a-b);
    const median = flat[Math.floor(flat.length/2)];

    for(let num of flat){
        ans += Math.abs(num - median)/x;
    }
    return ans;
};