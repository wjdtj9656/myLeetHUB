/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
        const MOD = 1e9 + 7;
        let zero = 0;
        let one = 0;
        let two = 1;

        for (const item of corridor) {
            if (item === 'S') {
                zero = one;
                [one, two] = [two, one];
            } else {
                two = (two + zero) % MOD;
            }
        }

        return zero;
};