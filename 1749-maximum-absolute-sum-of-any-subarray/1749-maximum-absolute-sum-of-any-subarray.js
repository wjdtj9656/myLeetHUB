function maxAbsoluteSum(nums) {
  let prefix = 0;
  let minPrefix = 0;
  let maxPrefix = 0;

  for (let num of nums) {
    prefix += num;                      
    minPrefix = Math.min(minPrefix, prefix); // 최소
    maxPrefix = Math.max(maxPrefix, prefix); // 최대
  }
  
  return maxPrefix - minPrefix;
}