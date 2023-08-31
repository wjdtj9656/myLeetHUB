/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const maxRange = new Array(n+1).fill(0);
    for(let i=0; i<ranges.length; i++){
      let left = Math.max(0,i-ranges[i]);
      let right = Math.min(n,i+ranges[i]);
      maxRange[left] = Math.max(maxRange[left], right);
    }
    
    let end = 0;
    let far = 0;
    let tap = 0;
    let index = 0;

    while(end < n){
      while(index <= end){
        far = Math.max(far, maxRange[index]);
        index++;
      }
      if(far <= end) return -1;

      end = far;
      tap++;
    }
    return tap;
};