/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    const [left,right] = [[],[]];
    for(let i=0; i<intervals.length; i++){
        let [start,end] = intervals[i];
        if(end < newInterval[0]) left.push(intervals[i]);
        else if(start > newInterval[1]) right.push(intervals[i]);
        else{
            newInterval[0] = Math.min(start,newInterval[0]);
            newInterval[1] = Math.max(end,newInterval[1]);
        }
    }
    return [...left, newInterval, ...right];
};