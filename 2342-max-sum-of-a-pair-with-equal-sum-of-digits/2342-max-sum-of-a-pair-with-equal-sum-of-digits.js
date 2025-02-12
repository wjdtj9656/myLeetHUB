var maximumSum = function(nums) {
    const digitSum = (num) => {
        let sum = 0;
        while(num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let max = -1;
    const groups = {}; 

    for (const num of nums) {
        const ds = digitSum(num);
        if (!groups[ds]) groups[ds] = [];
        groups[ds].push(num);
    }

    for (const group of Object.values(groups)) {
        if (group.length < 2) continue;  
        group.sort((a, b) => b - a);
        max = Math.max(max, group[0] + group[1]);
    }

    return max;
};