const possibleStringCount = function (word, k) {
    const MOD = 1_000_000_007;
    const length = word.length;

    const blockLengths = [];
    let currentCount = 1;

    for (let i = 1; i < length; ++i) {
        if (word[i] === word[i - 1]) {
            currentCount++;
        } else {
            blockLengths.push(currentCount);
            currentCount = 1;
        }
    }
    blockLengths.push(currentCount);

    let totalWays = 1;
    for (const block of blockLengths) {
        totalWays = (totalWays * block) % MOD;
    }

    if (blockLengths.length >= k) {
        return totalWays;
    }

    let dp = new Array(k).fill(0);
    let prefixSum = new Array(k).fill(1);
    dp[0] = 1;

    for (const block of blockLengths) {
        const newDp = new Array(k).fill(0);

        for (let length = 1; length < k; ++length) {
            newDp[length] = prefixSum[length - 1];
            const overLimit = length - block - 1;
            if (overLimit >= 0) {
                newDp[length] = (newDp[length] - prefixSum[overLimit] + MOD) % MOD;
            }
        }

        const newPrefixSum = new Array(k).fill(0);
        newPrefixSum[0] = newDp[0];
        for (let length = 1; length < k; ++length) {
            newPrefixSum[length] = (newPrefixSum[length - 1] + newDp[length]) % MOD;
        }

        dp = newDp;
        prefixSum = newPrefixSum;
    }

    return (totalWays - prefixSum[k - 1] + MOD) % MOD;
};
