var minimumDistance = function(nums) {
    const n = nums.length;
    const idx1 = new Int32Array(n + 1).fill(-1);
    const idx2 = new Int32Array(n + 1).fill(-1);
    let minDist = Infinity;

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (idx2[num] !== -1) {
            const dist = 2 * (i - idx2[num]);
            if (dist < minDist) {
                minDist = dist;
            }
        }
        idx2[num] = idx1[num];
        idx1[num] = i;
    }

    return minDist === Infinity ? -1 : minDist;
};