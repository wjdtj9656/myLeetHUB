var countTrapezoids = function(points) {
    const n = points.length;
    const slopeMap = new Map();
    const vectorMap = new Map();

    const getGcd = (a, b) => {
        return b === 0 ? a : getGcd(b, a % b);
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            let dy = y1 - y2;
            let dx = x1 - x2;

            if (dx < 0) {
                dx = -dx;
                dy = -dy;
            } else if (dx === 0 && dy < 0) {
                dy = -dy;
            }

            const g = getGcd(Math.abs(dx), Math.abs(dy));
            const reducedDx = dx / g;
            const reducedDy = dy / g;
            
            const slopeKey = `${reducedDy}/${reducedDx}`;
            const vectorKey = `${dy},${dx}`;
            const lineInterceptSlope = -reducedDy * x1 + reducedDx * y1;

            if (!slopeMap.has(slopeKey)) {
                slopeMap.set(slopeKey, new Map());
            }
            const linesInSlope = slopeMap.get(slopeKey);
            linesInSlope.set(lineInterceptSlope, (linesInSlope.get(lineInterceptSlope) || 0) + 1);

            if (!vectorMap.has(vectorKey)) {
                vectorMap.set(vectorKey, new Map());
            }
            const linesInVector = vectorMap.get(vectorKey);
            linesInVector.set(lineInterceptSlope, (linesInVector.get(lineInterceptSlope) || 0) + 1);
        }
    }

    const countPairs = (groupMap) => {
        let totalCount = 0;
        for (const linesMap of groupMap.values()) {
            let totalSegmentsInGroup = 0;
            let collinearPairs = 0;

            for (const count of linesMap.values()) {
                totalSegmentsInGroup += count;
                collinearPairs += count * (count - 1) / 2;
            }

            const totalPairs = totalSegmentsInGroup * (totalSegmentsInGroup - 1) / 2;
            totalCount += (totalPairs - collinearPairs);
        }
        return totalCount;
    };

    const trapezoidsBySlope = countPairs(slopeMap);
    const doubleCountedParallelograms = countPairs(vectorMap);

    return trapezoidsBySlope - (doubleCountedParallelograms / 2);
};