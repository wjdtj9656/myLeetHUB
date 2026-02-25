var sortByBits = function(arr) {
    const getBits = (num) => {
        let count = 0;
        while (num > 0) {
            num &= (num - 1);
            count++;
        }
        return count;
    };
    
    return arr.sort((a, b) => getBits(a) - getBits(b) || a - b);
};