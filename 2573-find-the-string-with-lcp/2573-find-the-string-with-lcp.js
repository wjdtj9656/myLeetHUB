var findTheString = function(lcp) {
    const n = lcp.length;
    let s = new Array(n).fill("");
    let charCode = 97; 

    for (let i = 0; i < n; i++) {
        if (s[i]) continue;
        if (charCode > 122) return "";
        
        const char = String.fromCharCode(charCode);
        for (let j = i; j < n; j++) {
            if (lcp[i][j] > 0 && !s[j]) {
                s[j] = char;
            }
        }
        charCode++;
    }

    const word = s.join('');

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let expectedLcp = 0;
            if (word[i] === word[j]) {
                expectedLcp = (i + 1 < n && j + 1 < n) ? lcp[i + 1][j + 1] + 1 : 1;
            }
            if (lcp[i][j] !== expectedLcp) {
                return "";
            }
        }
    }

    return word;
};