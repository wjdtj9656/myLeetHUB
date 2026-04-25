var maxDistance = function(side, points, k) {
    const n = points.length;
    const P = new Float64Array(2 * n);
    
    for (let i = 0; i < n; i++) {
        const x = points[i][0];
        const y = points[i][1];
        let p;
        if (y === 0) p = x;
        else if (x === side) p = side + y;
        else if (y === side) p = 3 * side - x;
        else p = 4 * side - y;
        P[i] = p;
    }
    
    const firstHalf = P.subarray(0, n);
    firstHalf.sort();
    
    const perimeter = 4 * side;
    for (let i = 0; i < n; i++) {
        P[n + i] = P[i] + perimeter;
    }
    
    const next = new Int32Array(2 * n);
    
    function check(D) {
        let right = 0;
        for (let left = 0; left < 2 * n; left++) {
            while (right < 2 * n && P[right] - P[left] < D) right++;
            next[left] = right;
        }
        
        for (let i = 0; i < n; i++) {
            let curr = i;
            let possible = true;
            for (let step = 1; step < k; step++) {
                curr = next[curr];
                if (curr >= 2 * n) {
                    possible = false;
                    break;
                }
            }
            if (possible && P[i] + perimeter - P[curr] >= D) return true;
        }
        return false;
    }
    
    let low = 1;
    let high = Math.floor(perimeter / k);
    let ans = 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return ans;
};