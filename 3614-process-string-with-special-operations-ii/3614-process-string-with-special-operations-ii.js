function processStr(s, k) {
    const lengths = [];
    let currentLength = 0n;
    const bigintK = BigInt(k);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '*') {
            if (currentLength > 0n) currentLength--;
        } else if (char === '#') {
            currentLength *= 2n;
        } else if (char === '%') {
        } else {
            currentLength++;
        }
        lengths.push(currentLength);
    }

    if (bigintK < 0n || bigintK >= currentLength) {
        return '.';
    }

    let currK = bigintK;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const prevLength = i > 0 ? lengths[i - 1] : 0n;

        if (char === '*') {
            if (currK === prevLength) {
                return s[i - 1]; 
            }
        } else if (char === '#') {
            if (currK >= prevLength) {
                currK -= prevLength;
            }
        } else if (char === '%') {
            if (lengths[i] > 0n) {
                currK = lengths[i] - 1n - currK;
            }
        } else {
            if (currK === prevLength) {
                return char;
            }
        }
    }

    return '.';
}