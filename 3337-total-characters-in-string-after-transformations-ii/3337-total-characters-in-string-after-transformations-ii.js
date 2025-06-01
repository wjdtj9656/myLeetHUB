const MOD = 1000000007n;
function lengthAfterTransformations(s, t, nums) {
    const n = 26;
    const A = Array.from({length:n}, () => Array(n).fill(0n));
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= nums[i]; j++) {
            A[i][(i + j) % n] += 1n;
        }
    }
    function mul(X, Y) {
        const Z = Array.from({length:n}, () => Array(n).fill(0n));
        for (let i = 0; i < n; i++) {
            for (let k = 0; k < n; k++) {
                const v = X[i][k];
                if (v) {
                    const rowZ = Z[i];
                    const rowYk = Y[k];
                    for (let j = 0; j < n; j++) {
                        rowZ[j] = (rowZ[j] + v * rowYk[j]) % MOD;
                    }
                }
            }
        }
        return Z;
    }
    function powMat(M, e) {
        let R = Array.from({length:n}, (_, i) => Array.from({length:n}, (_, j) => i === j ? 1n : 0n));
        let B = M;
        while (e > 0) {
            if (e & 1) R = mul(R, B);
            B = mul(B, B);
            e >>>= 1;
        }
        return R;
    }
    const Mpow = powMat(A, t);
    const y = Array(n).fill(0n);
    for (let i = 0; i < n; i++) {
        let sum = 0n;
        for (let j = 0; j < n; j++) {
            sum += Mpow[i][j];
        }
        y[i] = sum % MOD;
    }
    const cnt = Array(n).fill(0n);
    for (const ch of s) {
        cnt[ch.charCodeAt(0) - 97]++;
    }
    let ans = 0n;
    for (let i = 0; i < n; i++) {
        ans = (ans + cnt[i] * y[i]) % MOD;
    }
    return Number(ans);
}
