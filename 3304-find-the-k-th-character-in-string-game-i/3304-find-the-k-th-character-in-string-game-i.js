var kthCharacter = function(k) {
    let res = "a";

    const nextChar = (ch) => {
        return ch === 'z' ? 'a' : String.fromCharCode(ch.charCodeAt(0) + 1);
    };

    while (res.length < k) {
        const len = res.length;
        let toAppend = '';
        for (let i = 0; i < len; i++) {
            toAppend += nextChar(res[i]);
        }
        res += toAppend;
    }

    return res[k - 1];
};