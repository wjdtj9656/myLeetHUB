/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let maxSide = 0;
    const n = bottomLeft.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const x1 = Math.max(bottomLeft[i][0], bottomLeft[j][0]);
            const y1 = Math.max(bottomLeft[i][1], bottomLeft[j][1]);
            const x2 = Math.min(topRight[i][0], topRight[j][0]);
            const y2 = Math.min(topRight[i][1], topRight[j][1]);

            if (x1 < x2 && y1 < y2) {
                const width = x2 - x1;
                const height = y2 - y1;
                const side = Math.min(width, height);
                
                if (side > maxSide) {
                    maxSide = side;
                }
            }
        }
    }

    return maxSide * maxSide;
};