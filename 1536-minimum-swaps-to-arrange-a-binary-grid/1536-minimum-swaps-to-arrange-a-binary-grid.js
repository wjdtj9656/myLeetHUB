/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    const n = grid.length;
    const zeros = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === 0) {
                count++;
            } else {
                break;
            }
        }
        zeros[i] = count;
    }

    let swaps = 0;

    for (let i = 0; i < n; i++) {
        const target = n - 1 - i;
        let j = i;
        
        while (j < n && zeros[j] < target) {
            j++;
        }

        if (j === n) return -1;

        while (j > i) {
            const temp = zeros[j];
            zeros[j] = zeros[j - 1];
            zeros[j - 1] = temp;
            swaps++;
            j--;
        }
    }

    return swaps;
};