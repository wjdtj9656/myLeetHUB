/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    const rows = strs.length;
    const cols = strs[0].length;

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows - 1; r++) {
            if (strs[r][c] > strs[r + 1][c]) {
                count++;
                break;
            }
        }
    }

    return count;
};