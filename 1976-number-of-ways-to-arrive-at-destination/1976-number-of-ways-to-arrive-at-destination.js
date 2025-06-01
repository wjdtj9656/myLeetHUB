var countPaths = function(n, roads) {
    const mod = 1e9 + 7;
    const adj = Array.from({ length: n }, () => []);
    
    for (const [u, v, t] of roads) {
        adj[u].push([v, t]);
        adj[v].push([u, t]);
    }

    const shortestTime = Array(n).fill(Infinity);
    const cnt = Array(n).fill(0);
    const minHeap = [[0, 0]]; // [time, node]

    shortestTime[0] = 0;
    cnt[0] = 1;

    while (minHeap.length) {
        minHeap.sort((a, b) => a[0] - b[0]); // Ensure it's a min-heap
        const [time, node] = minHeap.shift();

        if (time > shortestTime[node]) continue;

        for (const [nbr, rtime] of adj[node]) {
            if (time + rtime < shortestTime[nbr]) {
                shortestTime[nbr] = time + rtime;
                cnt[nbr] = cnt[node];
                minHeap.push([shortestTime[nbr], nbr]);
            } else if (time + rtime === shortestTime[nbr]) {
                cnt[nbr] = (cnt[nbr] + cnt[node]) % mod;
            }
        }
    }

    return cnt[n - 1];
};