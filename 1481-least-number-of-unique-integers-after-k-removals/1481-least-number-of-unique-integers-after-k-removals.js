/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        map.set(arr[i], (map.get(arr[i]) || 0)+1);
    }
    const sortedArr =[];
    for(let [key,value] of map.entries()){
        sortedArr.push([key,value]);
    }
    sortedArr.sort((a,b)=>b[1]-a[1])
    const len = sortedArr.length;
    for(let i=0; i<len; i++){
        if(sortedArr[sortedArr.length-1][1] <= k){
            k -= sortedArr[sortedArr.length-1][1];
            sortedArr.pop()
        }
    }
    return sortedArr.length
};