/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let totalSum = 0;

    for (let num of nums) {
        let sum = 0;
        let count = 0;

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                count++;
                sum += i;
                if (i * i !== num) {
                    count++;
                    sum += num / i;
                }
            }
            if (count > 4) break;
        }

        if (count === 4) {
            totalSum += sum;
        }
    }

    return totalSum;
};