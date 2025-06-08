function lexicalOrder(n) {
    const res = [];
    let curr = 1;
    for (let i = 0; i < n; i++) {
        res.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else {
            if (curr >= n) {
                curr = Math.floor(curr / 10);
            }
            curr++;
            while (curr % 10 === 0) {
                curr = Math.floor(curr / 10);
            }
        }
    }
    return res;
}
