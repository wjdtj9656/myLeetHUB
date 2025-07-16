var maximumLength = function(nums) {
    let even = 0, odd = 0;
    for (let x of nums) {
        if (x % 2 === 0) even++;
        else odd++;
    }
    const p0 = Math.max(even, odd);
    const alt = start => {
        let exp = start, cnt = 0;
        for (let x of nums) {
            if (x % 2 === exp) {
                cnt++;
                exp ^= 1;
            }
        }
        return cnt;
    };
    const p1 = Math.max(alt(0), alt(1));
    return Math.max(p0, p1);
};
