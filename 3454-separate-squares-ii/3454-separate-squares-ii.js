/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    const xCoords = new Set();
    for (const [x, y, l] of squares) {
        xCoords.add(x);
        xCoords.add(x + l);
    }
    const xs = Array.from(xCoords).sort((a, b) => a - b);
    const xMap = new Map();
    xs.forEach((x, i) => xMap.set(x, i));

    const events = [];
    for (const [x, y, l] of squares) {
        events.push({ y: y, type: 1, x1: x, x2: x + l });
        events.push({ y: y + l, type: -1, x1: x, x2: x + l });
    }
    events.sort((a, b) => a.y - b.y);

    const n = xs.length - 1;
    const count = new Int32Array(4 * n);
    const len = new Float64Array(4 * n);

    function update(node, start, end, l, r, val) {
        if (l >= r) return;
        if (start === l && end === r) {
            count[node] += val;
        } else {
            const mid = (start + end) >> 1;
            if (r <= mid) update(node * 2, start, mid, l, r, val);
            else if (l >= mid) update(node * 2 + 1, mid, end, l, r, val);
            else {
                update(node * 2, start, mid, l, mid, val);
                update(node * 2 + 1, mid, end, mid, r, val);
            }
        }

        if (count[node] > 0) {
            len[node] = xs[end] - xs[start];
        } else if (start + 1 === end) {
            len[node] = 0;
        } else {
            len[node] = len[node * 2] + len[node * 2 + 1];
        }
    }

    let totalArea = 0;
    let prevY = events[0].y;
    const history = []; 

    for (let i = 0; i < events.length; i++) {
        const currY = events[i].y;
        const width = len[1] || 0; 
        
        if (currY > prevY) {
            const h = currY - prevY;
            const segmentArea = width * h;
            totalArea += segmentArea;
            history.push({ width: width, area: segmentArea, yStart: prevY });
        }
        
        while (i < events.length && events[i].y === currY) {
             const e = events[i];
             const l_idx = xMap.get(e.x1);
             const r_idx = xMap.get(e.x2);
             update(1, 0, n, l_idx, r_idx, e.type);
             i++;
        }
        i--;
        prevY = currY;
    }

    const target = totalArea / 2;
    let currentSum = 0;
    
    for (const seg of history) {
        if (currentSum + seg.area >= target) {
            return seg.yStart + (target - currentSum) / seg.width;
        }
        currentSum += seg.area;
    }
    
    return prevY;
};