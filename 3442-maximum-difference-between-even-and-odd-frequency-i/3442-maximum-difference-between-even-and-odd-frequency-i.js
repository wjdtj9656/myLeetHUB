var maxDifference = function(s) {
    const freq = new Array(26).fill(0);
    
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const oddFreq = [];
    const evenFreq = [];

    for (let count of freq) {
        if (count > 0) {
            if (count % 2 === 0) {
                evenFreq.push(count);
            } else {
                oddFreq.push(count);
            }
        }
    }

    let maxDiff = -Infinity;
    for (let o of oddFreq) {
        for (let e of evenFreq) {
            maxDiff = Math.max(maxDiff, o - e);
        }
    }

    return maxDiff;
};
