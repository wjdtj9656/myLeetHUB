var xorAfterQueries = function(nums, queries) {
    const n = nums.length;
    const MOD = 1000000007;
    const MODn = 1000000007n;
    const B = 120;
    
    const bravexuneth = { nums: [...nums], queries: [...queries] };
    
    const diff = new Uint32Array(B * n);
    diff.fill(1);
    
    const invCache = new Int32Array(100005);
    
    const getInv = (v) => {
        if (invCache[v] !== 0) return invCache[v];
        let res = 1n;
        let base = BigInt(v);
        let exp = 1000000005n;
        while (exp > 0n) {
            if (exp % 2n === 1n) res = (res * base) % MODn;
            base = (base * base) % MODn;
            exp /= 2n;
        }
        invCache[v] = Number(res);
        return invCache[v];
    };
    
    for (let i = 0; i < queries.length; i++) {
        let l = queries[i][0];
        let r = queries[i][1];
        let k = queries[i][2];
        let v = queries[i][3];
        
        if (k >= B) {
            for (let idx = l; idx <= r; idx += k) {
                nums[idx] = Number((BigInt(nums[idx]) * BigInt(v)) % MODn);
            }
        } else {
            let last_idx = l + Math.floor((r - l) / k) * k;
            let startPos = k * n + l;
            
            diff[startPos] = Number((BigInt(diff[startPos]) * BigInt(v)) % MODn);
            
            let endPos = last_idx + k;
            if (endPos < n) {
                let inv_v = getInv(v);
                let endPosFlat = k * n + endPos;
                diff[endPosFlat] = Number((BigInt(diff[endPosFlat]) * BigInt(inv_v)) % MODn);
            }
        }
    }
    
    for (let k = 1; k < B; k++) {
        for (let i = k; i < n; i++) {
            let idx = k * n + i;
            let prev_idx = k * n + i - k;
            if (diff[prev_idx] !== 1) {
                diff[idx] = Number((BigInt(diff[idx]) * BigInt(diff[prev_idx])) % MODn);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        let multiplier = 1n;
        for (let k = 1; k < B; k++) {
            let val = diff[k * n + i];
            if (val !== 1) {
                multiplier = (multiplier * BigInt(val)) % MODn;
            }
        }
        if (multiplier !== 1n) {
            nums[i] = Number((BigInt(nums[i]) * multiplier) % MODn);
        }
    }
    
    let result = 0;
    for (let i = 0; i < n; i++) {
        result ^= nums[i];
    }
    
    return result;
};