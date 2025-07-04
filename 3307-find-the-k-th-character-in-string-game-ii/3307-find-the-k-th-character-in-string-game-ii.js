var kthCharacter = function (k, operations) {
    let ans = 0;
    k = BigInt(k - 1);
    let i = 0n;
    while ((1n << i) <= k) i++;
    i--;

    for (; i >= 0n; i--) {
        if ((k >> i) & 1n) {
            ans += operations[Number(i)];
        }
    }

    return String.fromCharCode("a".charCodeAt(0) + (ans % 26));
};
