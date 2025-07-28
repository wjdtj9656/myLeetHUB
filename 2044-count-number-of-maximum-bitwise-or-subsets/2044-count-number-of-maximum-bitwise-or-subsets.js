function countMaxOrSubsets(nums) {
    const n = nums.length;
    let maxOr = 0;
    let count = 0;

    function dfs(index, currentOr) {
        if (index === n) {
            if (currentOr === maxOr) {
                count++;
            } else if (currentOr > maxOr) {
                maxOr = currentOr;
                count = 1;
            }
            return;
        }

        dfs(index + 1, currentOr | nums[index]);

        dfs(index + 1, currentOr);
    }

    dfs(0, 0);
    return count;
}
