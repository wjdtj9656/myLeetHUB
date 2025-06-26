var longestSubsequence = function(s, k) {
    let ans = 0;
    let value = 0n;
    const K = BigInt(k);
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            ans++;
        } else {
            const add = 1n << BigInt(ans);
            if (value + add <= K) {
                value += add;
                ans++;
            }
        }
    }
    return ans;
};
