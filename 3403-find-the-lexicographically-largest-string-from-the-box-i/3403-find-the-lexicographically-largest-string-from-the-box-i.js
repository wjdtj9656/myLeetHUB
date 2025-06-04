function answerString(word, numFriends) {
    const n = word.length;
    const maxLen = n - numFriends + 1;
    let maxStr = "";

    for (let i = 0; i < n; i++) {
        const candidate = word.substring(i, i + maxLen);
        if (candidate > maxStr) {
            maxStr = candidate;
        }
    }

    return maxStr;
}
