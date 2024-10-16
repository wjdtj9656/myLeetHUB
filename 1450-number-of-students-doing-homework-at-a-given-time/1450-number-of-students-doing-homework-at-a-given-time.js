/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  let ret = 0;
  for (let i = 0; i < startTime.length; ++i) {
    startTime[i] <= queryTime && endTime[i] >= queryTime && ++ret;
  }
  return ret;    
};