/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let str = "";
    for(let i=0; i<s.length-1; i++){
      str += s[i];
      let size = s.length / str.length;
      if(size % 1 === 0){
        let res = str.repeat(size);
        if(res == s) return true;
      }
    }
    return false;
};