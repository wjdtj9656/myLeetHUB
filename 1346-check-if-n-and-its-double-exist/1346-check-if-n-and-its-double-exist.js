/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const hashTable = {};
    
    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];
      
      if(hashTable[currValue] !== undefined) {
        return true
      }
      hashTable[currValue / 2] = currValue;
      hashTable[currValue * 2] = currValue;
    }
  
  return false;   
};