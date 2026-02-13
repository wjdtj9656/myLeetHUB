

/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let maxLen = 0;
    const n = s.length;

    let currentRun = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && s[i] === s[i - 1]) {
            currentRun++;
        } else {
            currentRun = 1;
        }
        maxLen = Math.max(maxLen, currentRun);
    }

    const checkTwo = (char1, char2, forbidden) => {
        let map = new Map();
        map.set(0, -1);
        let diff = 0;

        for (let i = 0; i < n; i++) {
            if (s[i] === forbidden) {
                map.clear();
                map.set(0, i);
                diff = 0;
                continue;
            }

            if (s[i] === char1) diff++;
            else if (s[i] === char2) diff--;

            if (map.has(diff)) {
                maxLen = Math.max(maxLen, i - map.get(diff));
            } else {
                map.set(diff, i);
            }
        }
    };

    checkTwo('a', 'b', 'c');
    checkTwo('a', 'c', 'b');
    checkTwo('b', 'c', 'a');

    let map = new Map();
    map.set("0,0", -1);
    let a = 0, b = 0, c = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') a++;
        else if (s[i] === 'b') b++;
        else if (s[i] === 'c') c++;

        let key = (a - b) + "," + (b - c);

        if (map.has(key)) {
            maxLen = Math.max(maxLen, i - map.get(key));
        } else {
            map.set(key, i);
        }
    }

    return maxLen;
};