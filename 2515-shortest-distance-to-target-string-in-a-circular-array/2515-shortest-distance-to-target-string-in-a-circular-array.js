var closestTarget = function (words, target, startIndex) {
        const arr = [];
        for (let i = 0; i < words.length; i++) {
            if (words[i] === target) {
                arr.push(i);
            }
        }

        if (arr.length === 0) return -1;

        let min = Infinity;
        const n = words.length;

        for (let i = 0; i < arr.length; i++) {
            let straightDist = Math.abs(arr[i] - startIndex);
            let circularDist = n - straightDist;

            let shortest = Math.min(straightDist, circularDist);

            min = Math.min(min, shortest);
        }

        return min;
    };