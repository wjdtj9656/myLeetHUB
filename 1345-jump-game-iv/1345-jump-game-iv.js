var minJumps = function(arr) {
    const n = arr.length;
    if (n <= 1) return 0;

    const map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) map.set(arr[i], []);
        map.get(arr[i]).push(i);
    }

    let queue = [0];
    const visited = new Set([0]);
    let steps = 0;

    while (queue.length > 0) {
        const nextQueue = [];
        
        for (const node of queue) {
            if (node === n - 1) return steps;

            const neighbors = map.get(arr[node]) || [];
            for (const child of neighbors) {
                if (!visited.has(child)) {
                    visited.add(child);
                    nextQueue.push(child);
                }
            }
            map.delete(arr[node]);

            if (node + 1 < n && !visited.has(node + 1)) {
                visited.add(node + 1);
                nextQueue.push(node + 1);
            }
            if (node - 1 >= 0 && !visited.has(node - 1)) {
                visited.add(node - 1);
                nextQueue.push(node - 1);
            }
        }
        queue = nextQueue;
        steps++;
    }
    
    return 0;
};