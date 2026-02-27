var minOperations = function(s, k) {
    let c = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === '0') c++;
    }
    if (c === 0) return 0;

    let L = c;
    let R = c;
    let p = c % 2;

    for (let step = 1; step <= n + 2; step++) {
        let nextL, nextR;

        if (k >= L && k <= R) {
            if (k % 2 === p) nextL = 0;
            else nextL = 1;
        } else if (k < L) {
            nextL = L - k;
        } else {
            nextL = k - R;
        }

        let targetR = n - k;
        if (targetR >= L && targetR <= R) {
            if (targetR % 2 === p) nextR = n;
            else nextR = n - 1;
        } else if (targetR < L) {
            nextR = 2 * n - L - k;
        } else {
            nextR = R + k;
        }

        L = nextL;
        R = nextR;
        p = (p + k) % 2;

        if (L === 0 && p === 0) return step;
    }
    
    return -1;
};