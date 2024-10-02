/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const arr2 = JSON.parse(JSON.stringify(arr));
    arr2.sort((a,b)=>a-b);
    const res = [];
    const map = {};
    let rank = 0;
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] == arr2[i-1]){
            map[arr2[i]] = rank;
        }
        else{
            map[arr2[i]] = ++rank;
        }
    }
    for(let i=0; i<arr.length; i++){
        res.push(map[arr[i]]);
    }
    return res;
};