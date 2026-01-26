var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    const ans = [];
    let min = 10e9;
    for (let i = 0; i < arr.length - 1; i++) {
        min = Math.min(min, arr[i + 1] - arr[i]);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === min) {
            ans.push([arr[i], arr[i + 1]]);
        }
    }
    return ans;
};
