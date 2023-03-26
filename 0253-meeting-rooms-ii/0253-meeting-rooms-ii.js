/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const start = new Map();
    const end = new Map()
    const max = Math.max(...intervals.flat());
    let result = 1;
    let cnt = 0;
    for(let [s,e] of intervals){
        start.set(s,(start.get(s) || 0) + 1);
        end.set(e,(end.get(e) || 0) + 1);
    }
    for(let i=0; i<max; i++){
        if(start.has(i)) cnt += start.get(i);
        if(end.has(i)) cnt -= end.get(i);
        result = Math.max(result,cnt);
    }
    return result;
};