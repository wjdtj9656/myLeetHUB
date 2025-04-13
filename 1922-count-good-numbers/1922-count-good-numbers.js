const MOD = 1000000007n;

function modExp(base, exponent, mod) {
    let result = 1n;
    base = base % mod;
    
    while (exponent > 0n) {
        if (exponent % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exponent = exponent / 2n;
    }
    
    return result;
}

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    let a = BigInt(Math.ceil(n / 2));
    let b = BigInt(Math.floor(n / 2));
    
    let part1 = modExp(5n, a, MOD);
    let part2 = modExp(4n, b, MOD);
    
    let answer = (part1 * part2) % MOD;
    return Number(answer); 
};
