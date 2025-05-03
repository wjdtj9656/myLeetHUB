var minDominoRotations = function(tops, bottoms) {
    const n = tops.length;

    const check = (target) => {
        let rotateTop = 0, rotateBottom = 0;
        for (let i = 0; i < n; i++) {
            if (tops[i] !== target && bottoms[i] !== target) {
                return Infinity;
            } else if (tops[i] !== target) {
                rotateTop++;
            } else if (bottoms[i] !== target) {
                rotateBottom++;
            }
        }
        return Math.min(rotateTop, rotateBottom);
    }

    let res = Math.min(check(tops[0]), check(bottoms[0]));
    return res === Infinity ? -1 : res;
};
