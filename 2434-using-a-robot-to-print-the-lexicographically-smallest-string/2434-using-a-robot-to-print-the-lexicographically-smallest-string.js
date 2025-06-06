function robotWithString(s) {
    const n = s.length;
    const mn = Array(n);
    mn[n - 1] = s[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        mn[i] = s[i] < mn[i + 1] ? s[i] : mn[i + 1];
    }
    const t = [];
    const p = [];
    let i = 0;
    while (i < n) {
        while (t.length && t[t.length - 1] <= mn[i]) {
            p.push(t.pop());
        }
        t.push(s[i]);
        i++;
    }
    while (t.length) {
        p.push(t.pop());
    }
    return p.join('');
}
