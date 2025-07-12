function earliestAndLatest(n, firstPlayer, secondPlayer) {
    const dp = Array(n+1).fill().map(()=>[]);
    for (let curN = 2; curN <= n; curN++) {
        dp[curN] = Array(curN+1).fill().map(()=>[]);
        for (let s = 1; s < curN; s++) {
            for (let e = s+1; e <= curN; e++) {
                if (s + e === curN + 1) {
                    dp[curN][s][e] = [1,1];
                } else {
                    let mn = Infinity, mx = 0;
                    const pairs = [];
                    const mid = curN % 2 ? (curN+1)/2 : null;
                    const half = Math.floor(curN/2);
                    for (let i = 1; i <= half; i++) {
                        const j = curN + 1 - i;
                        if (i === s || i === e || j === s || j === e) continue;
                        const ri = i < s ? 0 : (i > e ? 2 : 1);
                        const rj = j < s ? 0 : (j > e ? 2 : 1);
                        pairs.push([ri, rj]);
                    }
                    let bye = null;
                    if (mid != null && mid !== s && mid !== e) bye = mid < s ? 0 : (mid > e ? 2 : 1);
                    const total = Math.ceil(curN/2);
                    const need = total - 2;
                    const pLen = pairs.length;
                    for (let mask = 0, maxMask = 1<<pLen; mask < maxMask; mask++) {
                        let a = 0, b = 0, c = 0;
                        for (let k = 0; k < pLen; k++) {
                            const r = pairs[k][(mask>>k)&1];
                            if (r === 0) a++;
                            else if (r === 1) b++;
                            else c++;
                        }
                        if (bye != null) {
                            if (bye === 0) a++;
                            else if (bye === 1) b++;
                            else c++;
                        }
                        if (a + b + c !== need) continue;
                        const ns = a + 1;
                        const ne = a + b + 2;
                        const [cmn, cmx] = dp[total][ns][ne];
                        mn = Math.min(mn, cmn + 1);
                        mx = Math.max(mx, cmx + 1);
                    }
                    dp[curN][s][e] = [mn, mx];
                }
            }
        }
    }
    return dp[n][firstPlayer][secondPlayer];
}
