/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let index = 0;
    intervals.sort((a,b)=>a[0]-b[0]);
    while(index < intervals.length){
        const cur = intervals[index];
        let next = index+1;
        while(next < intervals.length){
            if(cur[1] >= intervals[next][0]){
                cur[1] = Math.max(cur[1], intervals[next][1]);
                intervals.splice(next,1);
            }
            else{
                break;
            }
        }
        index++;
    }
    return intervals;
};