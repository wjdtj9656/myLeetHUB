var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    let index = 0;
    let x = 0;
    let y = 0;

    for(let point of points) {

        if(index === 0) {
            x = point[0];
            y = point[1];
            index++; 
            continue;
        } else {

            ans += Math.max(Math.abs(x - point[0]), Math.abs(y - point[1]));
            x = point[0];
            y = point[1];
            
            index++;        }
    }
    return ans;
};