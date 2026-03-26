var minFlips = function(s) {
    const n = s.length;
    const s2 = s + s;
    let diff1 = 0;
    let diff2 = 0;
    let minFlips = Infinity;

    for (let i = 0; i < s2.length; i++) {
        const expected1 = i % 2 === 0 ? '0' : '1';
        const expected2 = i % 2 === 0 ? '1' : '0';

        if (s2[i] !== expected1) diff1++;
        if (s2[i] !== expected2) diff2++;

        if (i >= n) {
            const oldExpected1 = (i - n) % 2 === 0 ? '0' : '1';
            const oldExpected2 = (i - n) % 2 === 0 ? '1' : '0';

            if (s2[i - n] !== oldExpected1) diff1--;
            if (s2[i - n] !== oldExpected2) diff2--;
        }

        if (i >= n - 1) {
            minFlips = Math.min(minFlips, diff1, diff2);
        }
    }

    return minFlips;
};