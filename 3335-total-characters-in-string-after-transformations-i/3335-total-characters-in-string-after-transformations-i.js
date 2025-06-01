const MOD = 1e9 + 7;

function lengthAfterTransformations(s, t) {
    const count = Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for (const ch of s) {
        count[ch.charCodeAt(0) - base] = (count[ch.charCodeAt(0) - base] + 1) % MOD;
    }
    for (let step = 0; step < t; step++) {
        const next = Array(26).fill(0);
        for (let i = 0; i < 26; i++) {
            const c = count[i];
            if (!c) continue;
            if (i === 25) {
                next[0] = (next[0] + c) % MOD;
                next[1] = (next[1] + c) % MOD;
            } else {
                next[i + 1] = (next[i + 1] + c) % MOD;
            }
        }
        for (let i = 0; i < 26; i++) count[i] = next[i];
    }
    return count.reduce((sum, v) => (sum + v) % MOD, 0);
}
