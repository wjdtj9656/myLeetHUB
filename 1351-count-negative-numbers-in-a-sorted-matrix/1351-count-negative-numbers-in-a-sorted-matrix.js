/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let result = 0;
    
    for(let arr of grid){
        for(let val of arr){
            if(val < 0) result++; 
        }
    }
    return result;
};