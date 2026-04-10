
var minimumDistance = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }

    let minVal = Infinity;

    for (const indices of map.values()) {
        if (indices.length < 3) continue;
        for (let i = 0; i < indices.length - 2; i++) {
            const currentDist = 2 * (indices[i + 2] - indices[i]);
            if (currentDist < minVal) {
                minVal = currentDist;
            }
        }
    }

    return minVal === Infinity ? -1 : minVal;
};