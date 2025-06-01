/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let cntw = 0;
    let cntb = 0;
    for(let i=0; i<k; i++){
        if(blocks[i] == 'B'){
            cntb++;
        }
        if(blocks[i] == 'W'){
            cntw++;
        }
    }
    let min = 10e9;
    for(let i=k; i<blocks.length; i++){
        if(blocks[i] == 'B'){
            cntb++;
        }
        if(blocks[i] == 'W'){
            cntw++;
        }
        if(blocks[i-k] == 'B'){
            cntb--;
        }
        if(blocks[i-k] == 'W'){
            cntw--;
        }
        min = Math.min(min,cntw);
    }
    return min;
    
};