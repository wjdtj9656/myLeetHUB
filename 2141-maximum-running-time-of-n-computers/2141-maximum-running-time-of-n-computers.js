var maxRunTime = function(n, batteries) {
    batteries.sort((a, b) => a - b);
    let sum = batteries.reduce((acc, curr) => acc + curr, 0);

    while (batteries[batteries.length - 1] > sum / n) {
        sum -= batteries.pop();
        n--;
    }

    return Math.floor(sum / n);
};