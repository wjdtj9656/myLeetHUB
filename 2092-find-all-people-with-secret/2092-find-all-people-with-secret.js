/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    meetings.sort((a, b) => a[2] - b[2]);

    const known = new Set([0, firstPerson]);
    let i = 0;

    while (i < meetings.length) {
        let j = i;
        let time = meetings[i][2];
        const graph = new Map();
        const currentGroup = new Set();

        while (j < meetings.length && meetings[j][2] === time) {
            const [x, y] = meetings[j];
            if (!graph.has(x)) graph.set(x, []);
            if (!graph.has(y)) graph.set(y, []);
            graph.get(x).push(y);
            graph.get(y).push(x);
            currentGroup.add(x);
            currentGroup.add(y);
            j++;
        }

        const queue = [];
        for (const person of currentGroup) {
            if (known.has(person)) {
                queue.push(person);
            }
        }

        let head = 0;
        while (head < queue.length) {
            const curr = queue[head++];
            if (graph.has(curr)) {
                for (const next of graph.get(curr)) {
                    if (!known.has(next)) {
                        known.add(next);
                        queue.push(next);
                    }
                }
            }
        }
        i = j;
    }

    return Array.from(known);
};