/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
  
  const decode = (code, k) => {
    const result = [];
    let sum = 0;
    for(let i = 0; i < k; i++)
      sum += code[i];
    
    for(let i = 0 ; i < code.length; i++){
      sum -= code[i];
      sum += code[(i+k) % code.length];
      result.push(sum);
    }
    return result;
  }
  
  return k > 0 ? decode(code,k) : decode(code.reverse(), -k).reverse();    
};