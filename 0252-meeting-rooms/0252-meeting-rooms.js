/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => b[1] - a[1]);
    if(intervals.length === 0) return true;
    for(let i=1; i<intervals.length; i++){
        if(intervals[i-1][0] < intervals[i][1]) return false;
    }
    return true;
};