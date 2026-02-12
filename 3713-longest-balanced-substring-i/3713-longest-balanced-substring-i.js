
var longestBalanced = function(s) {
    let maxLen = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        let freq = {};
        for (let j = i; j < n; j++) {
            const char = s[j];
            freq[char] = (freq[char] || 0) + 1;

            const counts = Object.values(freq);
            const isBalanced = counts.every(val => val === counts[0]);

            if (isBalanced) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};