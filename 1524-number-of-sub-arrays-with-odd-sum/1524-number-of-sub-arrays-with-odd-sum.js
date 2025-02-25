function numOfSubarrays(arr) {
  const mod = 1e9 + 7;
  let evenCount = 1;
  let oddCount = 0;
  let prefix = 0;
  let result = 0;
  
  for (let num of arr) {
    prefix += num;
    
    if (prefix % 2 === 0) {
      result = (result + oddCount) % mod;
      evenCount++;
    } else {
      result = (result + evenCount) % mod;
      oddCount++;
    }
  }
  
  return result;
}