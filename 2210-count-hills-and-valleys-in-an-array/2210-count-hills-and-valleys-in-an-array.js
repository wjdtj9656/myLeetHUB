function countHillValley(nums) {
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) continue;

        let left = i - 1;
        while (left >= 0 && nums[left] === nums[i]) left--;
        if (left < 0) continue;

        let right = i + 1;
        while (right < nums.length && nums[right] === nums[i]) right++;
        if (right >= nums.length) continue;

        if ((nums[i] > nums[left] && nums[i] > nums[right]) ||
            (nums[i] < nums[left] && nums[i] < nums[right])) {
            count++;
        }
    }
    return count;
}
