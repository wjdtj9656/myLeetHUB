const minCapability = (nums, k) => {
    const canStealKHouses = (capability) => {
        let count = 0;
        let i = 0;
        while (i < nums.length) {
            if (nums[i] <= capability) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= k;
    };
    
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canStealKHouses(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};