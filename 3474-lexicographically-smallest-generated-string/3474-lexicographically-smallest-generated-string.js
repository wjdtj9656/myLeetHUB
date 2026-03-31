var generateString = function(str1, str2) {
    const n = str1.length;
    const m = str2.length;
    const len = n + m - 1;
    const word = new Array(len).fill(null);

    for (let i = 0; i < n; i++) {
        if (str1[i] === 'T') {
            for (let j = 0; j < m; j++) {
                if (word[i + j] !== null && word[i + j] !== str2[j]) {
                    return "";
                }
                word[i + j] = str2[j];
            }
        }
    }

    const unset_count = new Int32Array(n);
    const has_mismatch = new Uint8Array(n);

    for (let i = 0; i < n; i++) {
        if (str1[i] === 'F') {
            let count = 0;
            let mismatch = 0;
            for (let j = 0; j < m; j++) {
                if (word[i + j] === null) {
                    count++;
                } else if (word[i + j] !== str2[j]) {
                    mismatch = 1;
                }
            }
            unset_count[i] = count;
            has_mismatch[i] = mismatch;

            if (count === 0 && mismatch === 0) {
                return "";
            }
        }
    }

    for (let k = 0; k < len; k++) {
        if (word[k] !== null) continue;

        let forbidden = new Uint8Array(26);
        let start = Math.max(0, k - m + 1);
        let end = Math.min(n - 1, k);

        for (let i = start; i <= end; i++) {
            if (str1[i] === 'F') {
                if (has_mismatch[i] === 0 && unset_count[i] === 1) {
                    let char_idx = str2.charCodeAt(k - i) - 97;
                    forbidden[char_idx] = 1;
                }
            }
        }

        let chosen = null;
        for (let c = 0; c < 26; c++) {
            if (forbidden[c] === 0) {
                chosen = String.fromCharCode(c + 97);
                break;
            }
        }

        if (chosen === null) return "";

        word[k] = chosen;

        for (let i = start; i <= end; i++) {
            if (str1[i] === 'F') {
                unset_count[i]--;
                if (chosen !== str2[k - i]) {
                    has_mismatch[i] = 1;
                }
            }
        }
    }

    return word.join('');
};