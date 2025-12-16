/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function(n, present, future, hierarchy, budget) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of hierarchy) {
        adj[u - 1].push(v - 1);
    }

    const INF = -1e9;

    const merge = (dpAcc, dpChild) => {
        const next = Array(budget + 1).fill(INF);
        for (let i = 0; i <= budget; i++) {
            if (dpAcc[i] === INF) continue;
            for (let j = 0; i + j <= budget; j++) {
                if (dpChild[j] === INF) continue;
                next[i + j] = Math.max(next[i + j], dpAcc[i] + dpChild[j]);
            }
        }
        return next;
    };

    const dfs = (u) => {
        let childIfBuy = Array(budget + 1).fill(INF);
        let childIfSkip = Array(budget + 1).fill(INF);
        
        childIfBuy[0] = 0;
        childIfSkip[0] = 0;

        for (const v of adj[u]) {
            const [resParentSkip, resParentBuy] = dfs(v);
            childIfBuy = merge(childIfBuy, resParentBuy);
            childIfSkip = merge(childIfSkip, resParentSkip);
        }

        const dpSkip = [...childIfSkip];
        
        const resParentSkip = Array(budget + 1).fill(INF);
        const resParentBuy = Array(budget + 1).fill(INF);

        const fullCost = present[u];
        const halfCost = Math.floor(present[u] / 2);
        const profitFull = future[u] - fullCost;
        const profitHalf = future[u] - halfCost;

        for (let i = 0; i <= budget; i++) {
            resParentSkip[i] = dpSkip[i];
            
            if (i >= fullCost && childIfBuy[i - fullCost] !== INF) {
                resParentSkip[i] = Math.max(resParentSkip[i], childIfBuy[i - fullCost] + profitFull);
            }

            resParentBuy[i] = dpSkip[i];

            if (i >= halfCost && childIfBuy[i - halfCost] !== INF) {
                resParentBuy[i] = Math.max(resParentBuy[i], childIfBuy[i - halfCost] + profitHalf);
            }
        }

        return [resParentSkip, resParentBuy];
    };

    const [finalRes] = dfs(0);
    
    let maxP = 0;
    for (let i = 0; i <= budget; i++) {
        maxP = Math.max(maxP, finalRes[i]);
    }
    
    return maxP;
};