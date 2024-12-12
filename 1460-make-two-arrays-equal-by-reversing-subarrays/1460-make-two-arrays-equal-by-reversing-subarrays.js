/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const elementCounts = new Array(1001).fill(0);
    let uniqueCount = 0;
    
    for (let i = 0; i < target.length; i++) {
        if (elementCounts[target[i]]++ === 0) uniqueCount++;
        if (elementCounts[arr[i]]-- === 1) uniqueCount--;
    }
    
    return uniqueCount === 0;    
};