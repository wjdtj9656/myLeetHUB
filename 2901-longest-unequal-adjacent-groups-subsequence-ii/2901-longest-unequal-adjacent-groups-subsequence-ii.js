var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);
    function isHammingOne(a, b) {
        let diff = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i] && ++diff > 1) return false;
        }
        return diff === 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (
                groups[i] !== groups[j] &&
                words[i].length === words[j].length &&
                isHammingOne(words[i], words[j]) &&
                dp[i] + 1 > dp[j]
            ) {
                dp[j] = dp[i] + 1;
                prev[j] = i;
            }
        }
    }
    let maxLen = 0, end = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            end = i;
        }
    }
    const result = [];
    while (end !== -1) {
        result.push(words[end]);
        end = prev[end];
    }
    return result.reverse();
};
