var minimumCost = function(source, target, inputs, outputs, costs) {
    const MAX_COST = BigInt("18446744073709551615");
    const nodeMap = new Map();
    const chunkSizes = new Set();
    let nodeCount = 0;

    const graph = Array.from({ length: 201 }, () => Array(201).fill(MAX_COST));

    for (let i = 0; i < inputs.length; i++) {
        const fromStr = inputs[i];
        const toStr = outputs[i];
        const weight = BigInt(costs[i]);

        if (!nodeMap.has(fromStr)) {
            nodeMap.set(fromStr, nodeCount++);
            chunkSizes.add(fromStr.length);
        }
        
        if (!nodeMap.has(toStr)) {
            nodeMap.set(toStr, nodeCount++);
        }

        const u = nodeMap.get(fromStr);
        const v = nodeMap.get(toStr);

        if (weight < graph[u][v]) {
            graph[u][v] = weight;
        }
    }

    for (let i = 0; i < nodeCount; i++) {
        graph[i][i] = 0n;
    }

    for (let k = 0; k < nodeCount; k++) {
        for (let i = 0; i < nodeCount; i++) {
            if (graph[i][k] === MAX_COST) continue;
            
            for (let j = 0; j < nodeCount; j++) {
                if (graph[k][j] === MAX_COST) continue;

                const newDist = graph[i][k] + graph[k][j];
                if (newDist < graph[i][j]) {
                    graph[i][j] = newDist;
                }
            }
        }
    }

    const n = source.length;
    const dp = new Array(n + 1).fill(MAX_COST);
    dp[0] = 0n;

    for (let i = 0; i < n; i++) {
        if (dp[i] === MAX_COST) continue;

        if (source[i] === target[i]) {
            if (dp[i] < dp[i + 1]) {
                dp[i + 1] = dp[i];
            }
        }

        for (const len of chunkSizes) {
            if (i + len > n) continue;

            const subSrc = source.slice(i, i + len);
            const subTgt = target.slice(i, i + len);

            const u = nodeMap.get(subSrc);
            const v = nodeMap.get(subTgt);

            if (u !== undefined && v !== undefined) {
                const costVal = graph[u][v];
                if (costVal !== MAX_COST) {
                    if (dp[i] + costVal < dp[i + len]) {
                        dp[i + len] = dp[i] + costVal;
                    }
                }
            }
        }
    }

    return dp[n] === MAX_COST ? -1 : Number(dp[n]);
};