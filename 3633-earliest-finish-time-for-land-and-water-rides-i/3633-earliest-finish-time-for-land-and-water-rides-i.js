var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let minFinishTime = Infinity;
    const n = landStartTime.length;
    const m = waterStartTime.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const landFinish = landStartTime[i] + landDuration[i];
            const planAFinish = Math.max(landFinish, waterStartTime[j]) + waterDuration[j];
            
            const waterFinish = waterStartTime[j] + waterDuration[j];
            const planBFinish = Math.max(waterFinish, landStartTime[i]) + landDuration[i];
            
            minFinishTime = Math.min(minFinishTime, planAFinish, planBFinish);
        }
    }

    return minFinishTime;
};