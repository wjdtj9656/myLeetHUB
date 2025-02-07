var queryResults = function(limit, queries) {
    const res = [];
    const ballColors = {};
    const colorCount = {};
    let distinctColors = 0;
    
    for (const [ball, newColor] of queries) {
        if (ball in ballColors) {
            const oldColor = ballColors[ball];
            colorCount[oldColor]--;
            if (colorCount[oldColor] === 0) {
                distinctColors--;
                delete colorCount[oldColor];
            }
        }
        
        ballColors[ball] = newColor;
        if (newColor in colorCount) {
            colorCount[newColor]++;
        } else {
            colorCount[newColor] = 1;
            distinctColors++;
        }
        
        res.push(distinctColors);
    }
    
    return res;
};