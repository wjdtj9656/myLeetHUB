function tupleSameProduct(nums) {
  const productMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j];
      productMap.set(product, (productMap.get(product) || 0) + 1);
    }
  }

  let count = 0;
  for (const freq of productMap.values()) {
    if (freq > 1) {
      count += (freq * (freq - 1) / 2) * 8;
    }
  }
  
  return count;
}