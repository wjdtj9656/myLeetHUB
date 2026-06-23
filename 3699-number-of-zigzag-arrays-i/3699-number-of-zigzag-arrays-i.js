function zigZagArrays(n, l, r) {
    const MOD = 1000000007;
    const k = r - l + 1;
    
    let dp_inc = new Array(k + 1).fill(0);
    let dp_dec = new Array(k + 1).fill(0);
    
    for (let j = 1; j <= k; j++) {
        dp_inc[j] = j - 1;
        dp_dec[j] = k - j;
    }
    
    for (let i = 3; i <= n; i++) {
        let new_dp_inc = new Array(k + 1).fill(0);
        let new_dp_dec = new Array(k + 1).fill(0);
        
        let pref_dec = 0;
        for (let j = 1; j <= k; j++) {
            new_dp_inc[j] = pref_dec;
            pref_dec = (pref_dec + dp_dec[j]) % MOD;
        }
        
        let suff_inc = 0;
        for (let j = k; j >= 1; j--) {
            new_dp_dec[j] = suff_inc;
            suff_inc = (suff_inc + dp_inc[j]) % MOD;
        }
        
        dp_inc = new_dp_inc;
        dp_dec = new_dp_dec;
    }
    
    let total = 0;
    for (let j = 1; j <= k; j++) {
        total = (total + dp_inc[j]) % MOD;
        total = (total + dp_dec[j]) % MOD;
    }
    
    return total;
}