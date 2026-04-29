/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumScore = function(grid) {
    const n = grid.length;
    const pref = Array.from({ length: n }, () => new Array(n + 1).fill(0));
    
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            pref[j][i + 1] = pref[j][i] + grid[i][j];
        }
    }
    
    let dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-Infinity));
    
    for (let c = 0; c <= n; c++) {
        for (let k = 0; k <= n; k++) {
            dp[c][k] = pref[0][Math.max(k, c)] - pref[0][c];
        }
    }
    
    for (let j = 1; j < n; j++) {
        let nextDp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-Infinity));
        
        for (let c = 0; c <= n; c++) {
            const P = new Array(n + 1).fill(-Infinity);
            P[0] = dp[0][c];
            for (let p = 1; p <= n; p++) {
                P[p] = Math.max(P[p - 1], dp[p][c]);
            }
            
            const S = new Array(n + 2).fill(-Infinity);
            for (let p = n; p >= 0; p--) {
                S[p] = Math.max(S[p + 1], dp[p][c] + pref[j][Math.max(p, c)]);
            }
            
            for (let k = 0; k <= n; k++) {
                let term1 = P[k] + pref[j][Math.max(k, c)];
                let term2 = S[k + 1];
                nextDp[c][k] = Math.max(term1, term2) - pref[j][c];
            }
        }
        dp = nextDp;
    }
    
    let ans = 0;
    for (let c = 0; c <= n; c++) {
        ans = Math.max(ans, dp[c][0]);
    }
    
    return ans;
};