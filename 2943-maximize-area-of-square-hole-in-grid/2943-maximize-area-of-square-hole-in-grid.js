var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);

    const getGap = (arr) => {
        let maxLen = 1;
        let currLen = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1] + 1) {
                currLen++;
            } else {
                currLen = 1;
            }
            maxLen = Math.max(maxLen, currLen);
        }
        return maxLen + 1;
    };

    const h = getGap(hBars);
    const v = getGap(vBars);
    const side = Math.min(h, v);

    return side * side;
};