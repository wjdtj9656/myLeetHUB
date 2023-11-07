/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const arr = [];
    const len = dist.length;
    let result = 0;
    for(let i=0; i<len; i++){
        arr[i] = (dist[i] / speed[i]) >1? (dist[i]/speed[i]) :0;
        if(arr[i] %1 != 0){
            arr[i] = arr[i] >> 0;
            arr[i]+=1;
        }
    }
    arr.sort((a,b)=>a-b);
    let turn = 0;
    arr.shift();
    turn++;
    result++;
    while(arr.length !== 0){
        if(arr[0] > turn) arr.shift();
        else return result;
        turn++;
        result++;
    }
    return result;
};