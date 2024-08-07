/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
intervals.sort((a,b)=>a[0]-b[0]);

const ans = [];
for(var i=0 ; i<intervals.length; i++) {
    var s = intervals[i][0];
    var e = intervals[i][1];
    while(i < intervals.length-1 && intervals[i+1][0] <= e) {
        e = Math.max(e,intervals[i+1][1]);
        i++;
    }
    ans.push([s,e]);
    
}
return ans;
};