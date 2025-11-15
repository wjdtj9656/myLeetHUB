function numberOfSubstrings(s) {
    const n = s.length;
    const pos = [];
    for (let i = 0; i < n; i++) {
        if (s[i] === "0") pos.push(i);
    }

    let ans = 0;

    let i = 0;
    while (i < n) {
        if (s[i] === "1") {
            let j = i + 1;
            while (j < n && s[j] === "1") j++;
            const len = j - i;
            ans += len * (len + 1) / 2;
            i = j;
        } else {
            i++;
        }
    }

    const m = pos.length;
    if (m === 0) return ans;

    const Kmax = Math.floor((Math.sqrt(1 + 4 * n) - 1) / 2);

    function countPairs(A, B, C) {
        if (C >= B) return 0;
        let S = 0;
        if (C < 0) {
            const end0 = Math.min(A - 1, -C);
            if (end0 >= 0) S += (end0 + 1) * B;
        }
        const start1 = C >= 0 ? 0 : Math.max(0, -C + 1);
        const l2 = Math.min(A - 1, B - 1 - C);
        if (l2 >= start1) {
            const n1 = l2 - start1 + 1;
            const part1 = n1 * (B - C);
            let sumL;
            if (n1 % 2 === 0) {
                sumL = (n1 / 2) * (start1 + l2);
            } else {
                sumL = ((start1 + l2) / 2) * n1;
            }
            S += part1 - sumL;
        }
        return S;
    }

    for (let t = 0; t < m; t++) {
        const prev = t === 0 ? -1 : pos[t - 1];
        for (let k = 1; k <= Kmax; k++) {
            const endIdx = t + k - 1;
            if (endIdx >= m) break;
            const next = t + k >= m ? n : pos[t + k];

            const A = pos[t] - prev;
            const B = next - pos[endIdx];
            if (A <= 0 || B <= 0) continue;

            const base = pos[endIdx] - prev;
            const T = k * k + k;
            const C = T - base;
            if (C >= B) continue;

            ans += countPairs(A, B, C);
        }
    }

    return ans;
}
