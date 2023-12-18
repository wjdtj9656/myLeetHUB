/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let first1 = 0, second1 = 0;
    let first2 = Infinity, second2 = Infinity;

    for (const n of nums) {
        if (n < first2) {
            second2 = first2;
            first2 = n;
        } else if (n < second2) {
            second2 = n;
        }

        if (n > first1) {
            second1 = first1;
            first1 = n;
        } else if (n > second1) {
            second1 = n;
        }
    }

    return (first1 * second1) - (first2 * second2);
};