var minOperations = function (nums) {
    let ops = 0;

    while (true) {
        let isSorted = true;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                isSorted = false;
                break;
            }
        }
        if (isSorted) return ops;

        let minSum = Infinity;
        let idx = -1;

        for (let i = 0; i < nums.length - 1; i++) {
            let sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minSum = sum;
                idx = i;
            }
        }

        nums.splice(idx, 2, minSum);
        ops++;
    }
};