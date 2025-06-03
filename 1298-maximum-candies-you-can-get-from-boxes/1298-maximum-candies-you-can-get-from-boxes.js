function maxCandies(status, candies, keys, containedBoxes, initialBoxes) {
    const n = status.length;
    const haveKey = Array(n).fill(false);
    const haveBox = Array(n).fill(false);
    const pending = new Set();
    let total = 0;
    const queue = [];
    for (const b of initialBoxes) {
        haveBox[b] = true;
        if (status[b] === 1) queue.push(b);
        else pending.add(b);
    }
    while (queue.length) {
        const b = queue.shift();
        total += candies[b];
        for (const k of keys[b]) {
            if (!haveKey[k]) {
                haveKey[k] = true;
                if (haveBox[k] && pending.has(k)) {
                    pending.delete(k);
                    queue.push(k);
                }
            }
        }
        for (const cb of containedBoxes[b]) {
            if (!haveBox[cb]) {
                haveBox[cb] = true;
                if (status[cb] === 1 || haveKey[cb]) {
                    queue.push(cb);
                } else {
                    pending.add(cb);
                }
            }
        }
    }
    return total;
}
