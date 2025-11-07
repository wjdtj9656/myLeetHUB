function maxPower(stations, r, k) {
    const n = stations.length;
    const prefix = new Array(n + 1);
    prefix[0] = 0;
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stations[i];

    const base = new Array(n);
    let minBase = Infinity;
    let maxBase = 0;
    for (let i = 0; i < n; i++) {
        const left = Math.max(0, i - r);
        const right = Math.min(n - 1, i + r);
        const val = prefix[right + 1] - prefix[left];
        base[i] = val;
        if (val < minBase) minBase = val;
        if (val > maxBase) maxBase = val;
    }

    function can(target) {
        const diff = new Array(n + 1).fill(0);
        let add = 0;
        let used = 0;
        for (let i = 0; i < n; i++) {
            add += diff[i];
            let power = base[i] + add;
            if (power < target) {
                let need = target - power;
                used += need;
                if (used > k) return false;
                add += need;
                const end = i + 2 * r + 1;
                if (end < n) diff[end] -= need;
            }
        }
        return true;
    }

    let low = minBase;
    let high = maxBase + k;
    let ans = minBase;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (can(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}
