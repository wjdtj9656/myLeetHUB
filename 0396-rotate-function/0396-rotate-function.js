var maxRotateFunction = function(nums) {
    let n = nums.length;
    let sum = 0;
    let f = 0;
    
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }
    
    let maxF = f;
    
    for (let i = n - 1; i > 0; i--) {
        f = f + sum - n * nums[i];
        maxF = Math.max(maxF, f);
    }
    
    return maxF;
};