/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let left = 0;
    let right = 1;
    intervals.sort((a,b)=>{
        if(a[0] === b[0]){
            return a[1] - b[1];
        }
        return a[0] - b[0];
    })
    let now = [intervals[0]];
    const result = [];
    while(left !== intervals.length){
        if(now.length === 0){
            now.push(intervals[left]);
        }
        if(right < intervals.length && intervals[left][1] >= intervals[right][0] ){
            now[0][0] = intervals[left][0];
            now[0][1] = Math.max(intervals[right][1],intervals[left][1]);
            right++;
        }
        else{
            result.push(now.shift());
            left = right;
            right++;
        }
    }
    return result;
};