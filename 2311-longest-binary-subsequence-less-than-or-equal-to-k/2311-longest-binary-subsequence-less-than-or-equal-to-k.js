var longestSubsequence = function(s, k) {
    let ans = 0;
    let value = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            ans++;
        } else if (value + (1 << ans) <= k) {
            value += (1 << ans);
            ans++;
        }
    }
    return ans;
};
