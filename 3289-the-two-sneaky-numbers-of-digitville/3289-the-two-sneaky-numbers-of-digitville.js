/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
      const n = nums.length - 2;

  let xr = 0;
  for (const v of nums) xr ^= v;
  for (let i = 0; i < n; i++) xr ^= i; 

  const lowbit = xr & -xr;

  let a = 0, b = 0;
  for (const v of nums) {
    if (v & lowbit) a ^= v; else b ^= v;
  }
  for (let i = 0; i < n; i++) {
    if (i & lowbit) a ^= i; else b ^= i;
  }

  return [a, b]; 
};