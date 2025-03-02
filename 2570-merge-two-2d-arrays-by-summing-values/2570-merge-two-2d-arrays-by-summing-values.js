var mergeArrays = function (a, b) {
    let i = 0,
        j = 0,
        m = a.length,
        n = b.length,
        o = [];
    while (i < m && j < n) {
        let [id1, v1] = a[i];
        let [id2, v2] = b[j];

        if (id1 === id2) {
            o.push([id1, v1 + v2]);
            i++;
            j++;
        } else if (id1 < id2) {
            o.push([id1, v1]);
            i++;
        } else {
            o.push([id2, v2]);
            j++;
        }
    }
    for (; i < m; i++) o.push(a[i]); // remain a
    for (; j < n; j++) o.push(b[j]); // remain b
    return o;
};