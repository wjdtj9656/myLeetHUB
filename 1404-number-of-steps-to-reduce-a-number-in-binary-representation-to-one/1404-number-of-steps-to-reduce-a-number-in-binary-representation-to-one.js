 var numSteps = function (s) {
        let num = BigInt("0b" + s);
        let cnt = 0;

        while (num !== 1n) {
            if (num % 2n === 1n) {
                num += 1n;
            } else {
                num /= 2n;
            }
            cnt++;
        }
        return cnt;
    };