var minOperations = function(s) {
    let ch = s[0];
    let cnt1 = count(s, ch);
    let cnt2 = count(s, ch === '0' ? '1' : '0') + 1;
    return Math.min(cnt1, cnt2);
};

const count = function(s, prev) {
    let count = 0;
    for (let i = 1; i < s.length; i++) {
        let current = s[i];
        if (current === prev) {
            count++;
            prev = prev === '0' ? '1' : '0';
        } else {
            prev = current;
        }
    }
    return count;
};