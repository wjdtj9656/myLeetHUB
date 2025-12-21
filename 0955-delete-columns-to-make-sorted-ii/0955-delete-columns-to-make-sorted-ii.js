/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;
    let count = 0;
    const isSorted = new Array(n - 1).fill(false);

    for (let j = 0; j < m; j++) {
        let i;
        for (i = 0; i < n - 1; i++) {
            if (!isSorted[i] && strs[i][j] > strs[i + 1][j]) {
                count++;
                break;
            }
        }

        if (i === n - 1) {
            for (let k = 0; k < n - 1; k++) {
                if (strs[k][j] < strs[k + 1][j]) {
                    isSorted[k] = true;
                }
            }
        }
    }

    return count;
};