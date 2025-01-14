function findThePrefixCommonArray(A, B) {
    const n = A.length;
    const a = new Set();
    const b = new Set();
    const C = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        a.add(A[i]);
        b.add(B[i]);
        let cnt = 0;
        for (let c of a) {
            if (b.has(c)) {
                cnt++;
            }
        }
        C[i] = cnt;
    }
    return C;
}