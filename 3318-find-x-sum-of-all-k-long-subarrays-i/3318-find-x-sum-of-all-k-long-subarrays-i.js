function findXSum(nums, k, x) {
    const n = nums.length;
    const ans = [];

    for (let i = 0; i <= n - k; i++) {
        const freq = new Map();
        for (let j = i; j < i + k; j++) {
            const v = nums[j];
            freq.set(v, (freq.get(v) || 0) + 1);
        }

        const arr = [...freq.entries()].sort((a, b) => {
            if (b[1] !== a[1]) return b[1] - a[1];
            return b[0] - a[0];
        });

        let sum = 0;
        let cnt = 0;
        for (const [val, f] of arr) {
            if (cnt === x) break;
            sum += val * f;
            cnt++;
        }

        ans.push(sum);
    }

    return ans;
}
