/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = {};
    for(let i=0; i<arr.length; i++){
        const key = arr[i];
        map[key] = (map[key] || 0) +1;
    }
    let max = -1;
    for(let key in map){
        if(key == map[key]){
            max = Math.max(max,key);
        } 
    }
    return max;
};