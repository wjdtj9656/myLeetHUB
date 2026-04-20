var maxDistance = function(colors) {
    let n = colors.length;
    let i = 0;
    let j = n - 1;

    while (colors[j] === colors[0]) {
        j--;
    }
    let res1 = j;

    while (colors[i] === colors[n - 1]) {
        i++;
    }
    let res2 = n - 1 - i;

    return Math.max(res1, res2);
};