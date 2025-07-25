function maxSum(nums) {
    const uniq = new Set(nums);
    let sum = 0;
    for (const n of uniq) {
        if (n > 0) sum += n;
    }
    return sum > 0 ? sum : Math.max(...nums);
}
