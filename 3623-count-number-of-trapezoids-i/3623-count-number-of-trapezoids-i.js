var countTrapezoids = function(points) {
    const MOD = 1000000007n;
    const map = new Map();

    for (const point of points) {
        const y = point[1];
        map.set(y, (map.get(y) || 0) + 1);
    }

    let ans = 0n;
    let sum = 0n;

    for (const count of map.values()) {
        if (count < 2) continue;

        const n = BigInt(count);
        const pairs = n * (n - 1n) / 2n;

        ans = (ans + pairs * sum) % MOD;
        sum = (sum + pairs) % MOD;
    }

    return Number(ans);
};