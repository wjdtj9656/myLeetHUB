

/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let totalArea = 0;
    const events = [];

    for (const [x, y, l] of squares) {
        totalArea += l * l;
        events.push({ y: y, l: l, type: 1 });
        events.push({ y: y + l, l: l, type: -1 });
    }

    events.sort((a, b) => a.y - b.y);

    const target = totalArea / 2;
    let currentArea = 0;
    let currentWidth = 0;
    let prevY = events[0].y;

    for (let i = 0; i < events.length; i++) {
        const curY = events[i].y;
        const height = curY - prevY;

        if (height > 0) {
            const stripArea = currentWidth * height;
            if (currentArea + stripArea >= target) {
                return prevY + (target - currentArea) / currentWidth;
            }
            currentArea += stripArea;
        }

        let j = i;
        while (j < events.length && events[j].y === curY) {
            if (events[j].type === 1) {
                currentWidth += events[j].l;
            } else {
                currentWidth -= events[j].l;
            }
            j++;
        }
        prevY = curY;
        i = j - 1;
    }

    return prevY;
};