/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    if(columnNumber == 0) return null;
    let result = '';
    while(columnNumber > 0){
      let r = columnNumber %26;
      let d = parseInt(columnNumber / 26);

      if(r == 0){
        r = 26;
        d = d-1;
      }
      result += String.fromCharCode(64 + r);
      columnNumber = d;
    }
    return result.split('').reverse().join('');
};