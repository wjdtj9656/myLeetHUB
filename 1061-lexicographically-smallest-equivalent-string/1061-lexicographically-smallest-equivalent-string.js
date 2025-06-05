function smallestEquivalentString(s1, s2, baseStr) {
    const parent = Array.from({ length: 26 }, (_, i) => i);
    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }
    function union(x, y) {
        let rx = find(x), ry = find(y);
        if (rx === ry) return;
        if (rx < ry) parent[ry] = rx;
        else parent[rx] = ry;
    }
    for (let i = 0; i < s1.length; i++) {
        union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
    }
    let res = '';
    for (let c of baseStr) {
        let r = find(c.charCodeAt(0) - 97);
        res += String.fromCharCode(r + 97);
    }
    return res;
}
