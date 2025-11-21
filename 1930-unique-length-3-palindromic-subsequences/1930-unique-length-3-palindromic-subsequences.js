function countPalindromicSubsequence(s) {
    const n = s.length;
    const first = Array(26).fill(n);
    const last = Array(26).fill(-1);
    
    for (let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - 97;
        if (i < first[idx]) first[idx] = i;
        if (i > last[idx]) last[idx] = i;
    }
    
    let res = 0;
    
    for (let c = 0; c < 26; c++) {
        if (first[c] < last[c]) {
            const set = new Set();
            for (let i = first[c] + 1; i < last[c]; i++) {
                set.add(s[i]);
            }
            res += set.size;
        }
    }
    
    return res;
}
