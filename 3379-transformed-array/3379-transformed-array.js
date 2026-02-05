
function constructTransformedArray(nums) {
    const n = nums.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            result[i] = 0;
            continue;
        }

        let targetIndex = (i + nums[i]) % n;
        
        if (targetIndex < 0) {
            targetIndex += n;
        }

        result[i] = nums[targetIndex];
    }

    return result;
}