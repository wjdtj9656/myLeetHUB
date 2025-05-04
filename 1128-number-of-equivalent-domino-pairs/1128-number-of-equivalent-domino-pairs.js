var numEquivDominoPairs = function(dominoes) {
    const map = {};
    let res = 0;
    
    for (const [a, b] of dominoes) {
        const x = Math.min(a, b);
        const y = Math.max(a, b);
        const key = x * 10 + y; // 숫자 기반 키

        map[key] = (map[key] || 0) + 1;
    }

    for (const count of Object.values(map)) {
        if (count > 1) {
            res += (count * (count - 1)) / 2;
        }
    }

    return res;
};
