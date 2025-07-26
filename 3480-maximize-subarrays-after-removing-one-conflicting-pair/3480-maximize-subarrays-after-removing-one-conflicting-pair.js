function maxSubarrays(n, conflictingPairs) {
    const m = conflictingPairs.length;
    const L = new Array(m);
    const R = new Array(m);
    const endsAt = Array.from({length: n + 1}, () => []);
    for (let i = 0; i < m; i++) {
        const [a, b] = conflictingPairs[i];
        const l = Math.min(a, b), r = Math.max(a, b);
        L[i] = l;
        R[i] = r;
        endsAt[r].push(i);
    }
    let currentMax = 0, secondMax = 0, countMax = 0, soloId = -1;
    const delta = new Array(m).fill(0);
    let ansAll = 0;
    for (let r = 1; r <= n; r++) {
        for (const j of endsAt[r]) {
            const newL = L[j];
            if (newL > currentMax) {
                secondMax = currentMax;
                currentMax = newL;
                countMax = 1;
                soloId = j;
            } else if (newL === currentMax) {
                countMax++;
                soloId = -1;
            } else if (newL > secondMax) {
                secondMax = newL;
            }
        }
        ansAll += r - currentMax;
        if (countMax === 1) {
            delta[soloId] += currentMax - secondMax;
        }
    }
    let result = 0;
    for (let i = 0; i < m; i++) {
        const v = ansAll + delta[i];
        if (v > result) result = v;
    }
    return result;
}
