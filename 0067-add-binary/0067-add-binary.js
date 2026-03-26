var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        let digitA = (i >= 0) ? parseInt(a[i]) : 0;
        let digitB = (j >= 0) ? parseInt(b[j]) : 0;

        let sum = digitA + digitB + carry;

        result = (sum % 2) + result;

        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
};