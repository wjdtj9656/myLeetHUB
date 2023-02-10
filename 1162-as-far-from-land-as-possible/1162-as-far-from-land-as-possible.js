/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grids) {
    const lands = [];
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    let result = 0;
    for(let i=0; i<grids.length; i++){
        for(let j=0; j<grids[i].length; j++){
            if(grids[i][j] === 0) lands.push([i,j]);
        }
    }
    if(lands.length === 0 || lands.length === grids[0].length * grids.length) return -1;
    
    for(let k=0; k<lands.length; k++){
        let [kx,ky] = lands[k];
        let distance;
        let min = Infinity;
        for(let i=0; i<grids.length; i++){
            for(let j=0; j<grids[i].length; j++){
                if(kx === i && ky === j) continue;
                if(grids[i][j] === 0) continue;
                if(grids[i][j] === 1){
                    distance = Math.abs(i-kx) + Math.abs(j-ky);
                    min = Math.min(min,distance);
                }
                if(min === Infinity) continue;
                
            }
        }
        result = Math.max(result, min);
    }
    return result;
};