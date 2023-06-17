/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    const map = new Map();
    let result = 0;
    let startIndex = 0;
    for(let i=0; i<s.length; i++){
      if(!map.has(s[i])) map.set(s[i],1);
      else map.set(s[i],map.get(s[i])+1);

      if(map.size <= 2) result = Math.max(result, i - startIndex);
      else if(map.size > 2){
        map.set(s[startIndex], map.get(s[startIndex]) - 1);
        if(map.get(s[startIndex]) == 0) map.delete(s[startIndex]);
        startIndex++;
      }
    }
    return result+1;
};