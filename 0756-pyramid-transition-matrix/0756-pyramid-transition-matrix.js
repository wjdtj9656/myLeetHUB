/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    const map = new Map();
    for (const s of allowed) {
        const key = s.substring(0, 2);
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s[2]);
    }

    const visited = new Set();

    const solve = (row) => {
        if (row.length === 1) return true;
        if (visited.has(row)) return false;

        if (buildNextRow(row, 0, "")) return true;

        visited.add(row);
        return false;
    };

    const buildNextRow = (row, index, currentNext) => {
        if (index === row.length - 1) {
            return solve(currentNext);
        }

        const key = row[index] + row[index + 1];
        if (!map.has(key)) return false;

        for (const char of map.get(key)) {
            if (buildNextRow(row, index + 1, currentNext + char)) {
                return true;
            }
        }
        return false;
    };

    return solve(bottom);
};