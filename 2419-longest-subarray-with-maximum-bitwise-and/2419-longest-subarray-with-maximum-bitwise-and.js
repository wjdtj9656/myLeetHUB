function longestSubarray(nums) {
    let maxVal = 0;
    for (const v of nums) if (v > maxVal) maxVal = v;
    let longest = 0, current = 0;
    for (const v of nums) {
        if (v === maxVal) {
            current++;
        } else {
            if (current > longest) longest = current;
            current = 0;
        }
    }
    return Math.max(longest, current);
}
