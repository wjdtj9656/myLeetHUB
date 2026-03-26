var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    let totalSum = 0;
    const rowSum = new Float64Array(m);
    const colSum = new Float64Array(n);
    
    const minRow = new Map();
    const maxRow = new Map();
    const minCol = new Map();
    const maxCol = new Map();
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let v = grid[r][c];
            totalSum += v;
            rowSum[r] += v;
            colSum[c] += v;
            
            if (!minRow.has(v)) {
                minRow.set(v, r);
            }
            maxRow.set(v, r);
            
            if (!minCol.has(v)) {
                minCol.set(v, c);
            } else if (c < minCol.get(v)) {
                minCol.set(v, c);
            }
            
            if (!maxCol.has(v)) {
                maxCol.set(v, c);
            } else if (c > maxCol.get(v)) {
                maxCol.set(v, c);
            }
        }
    }
    
    let S_T = 0;
    for (let i = 0; i < m - 1; i++) {
        S_T += rowSum[i];
        let S_B = totalSum - S_T;
        
        if (S_T === S_B) return true;
        
        if (S_T > S_B) {
            let diff = S_T - S_B;
            if (n === 1) {
                if (grid[0][0] === diff || grid[i][0] === diff) return true;
            } else if (i === 0) {
                if (grid[0][0] === diff || grid[0][n - 1] === diff) return true;
            } else {
                if (minRow.has(diff) && minRow.get(diff) <= i) return true;
            }
        } else {
            let diff = S_B - S_T;
            if (n === 1) {
                if (grid[i + 1][0] === diff || grid[m - 1][0] === diff) return true;
            } else if (i === m - 2) {
                if (grid[m - 1][0] === diff || grid[m - 1][n - 1] === diff) return true;
            } else {
                if (maxRow.has(diff) && maxRow.get(diff) >= i + 1) return true;
            }
        }
    }
    
    let S_L = 0;
    for (let j = 0; j < n - 1; j++) {
        S_L += colSum[j];
        let S_R = totalSum - S_L;
        
        if (S_L === S_R) return true;
        
        if (S_L > S_R) {
            let diff = S_L - S_R;
            if (m === 1) {
                if (grid[0][0] === diff || grid[0][j] === diff) return true;
            } else if (j === 0) {
                if (grid[0][0] === diff || grid[m - 1][0] === diff) return true;
            } else {
                if (minCol.has(diff) && minCol.get(diff) <= j) return true;
            }
        } else {
            let diff = S_R - S_L;
            if (m === 1) {
                if (grid[0][j + 1] === diff || grid[0][n - 1] === diff) return true;
            } else if (j === n - 2) {
                if (grid[0][n - 1] === diff || grid[m - 1][n - 1] === diff) return true;
            } else {
                if (maxCol.has(diff) && maxCol.get(diff) >= j + 1) return true;
            }
        }
    }
    
    return false;
};