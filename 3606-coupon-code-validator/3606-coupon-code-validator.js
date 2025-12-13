var validateCoupons = function (code, businessLine, isActive) {
    const order = ["electronics", "grocery", "pharmacy", "restaurant"];
    const allowed = new Set(order);
    const re = /^[A-Za-z0-9_]+$/;

    const groups = {
        electronics: [],
        grocery: [],
        pharmacy: [],
        restaurant: [],
    };

    for (let i = 0; i < code.length; i++) {
        const c = code[i];
        const b = businessLine[i];

        if (isActive[i] !== true) continue;
        if (!c || !re.test(c)) continue;
        if (!allowed.has(b)) continue;

        groups[b].push(c);
    }

    const res = [];
    for (const b of order) {
        groups[b].sort();
        res.push(...groups[b]);
    }

    return res;
};
