var distance = function (a) {
    let m = new Map();
    a.forEach((e, i) => {
        if (!m.has(e)) m.set(e, []);
        m.get(e).push(i);
    });

    let arr = []; // answer
    for (let [e, a_i] of m) {
        if (a_i.length === 1) {
            let i = a_i[0]; // a_i array of indexes
            arr[i] = 0;     // If there is no such j, set arr[i] to be 0.
        } else {
            let n = a_i.length,
                sum = 0,
                pre_i = [];
            a_i.forEach((i) => {
                pre_i.push((sum += i)); // calculate prefix sum
            });
            a_i.forEach((i, j) => {
                let leftDiffSum = i * j - (pre_i[j - 1] || 0);
                let rightDiffSum =  // use formula given above
                    pre_i[n - 1] - (pre_i[j] || 0) - i * (n - 1 - j);
                arr[i] = leftDiffSum + rightDiffSum;
            });
        }
    }
    return arr;
};