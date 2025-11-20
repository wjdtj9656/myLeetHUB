var intersectionSizeTwo = function (intervals) {
    intervals.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]);
    
    let a = -1;
    let b = -1;
    let res = 0;
    
    for (const [l, r] of intervals) {
        if (l <= a) continue;
        if (l > b) {
            res += 2;
            a = r - 1;
            b = r;
        } else {
            res += 1;
            a = b;
            b = r;
        }
    }
    
    return res;
};
