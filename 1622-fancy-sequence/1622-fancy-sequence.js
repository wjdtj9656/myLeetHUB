class Fancy {
    constructor() {
        this.seq = [];
        this.add = 0n;
        this.mul = 1n;
        this.MOD = 1000000007n;
    }

    power(base, exp) {
        let res = 1n;
        base = base % this.MOD;
        while (exp > 0n) {
            if (exp % 2n === 1n) res = (res * base) % this.MOD;
            base = (base * base) % this.MOD;
            exp /= 2n;
        }
        return res;
    }

    modInverse(n) {
        return this.power(n, this.MOD - 2n);
    }

    append(val) {
        const v = BigInt(val);
        const x = (((v - this.add + this.MOD) % this.MOD) * this.modInverse(this.mul)) % this.MOD;
        this.seq.push(x);
    }

    addAll(inc) {
        this.add = (this.add + BigInt(inc)) % this.MOD;
    }

    multAll(m) {
        const mult = BigInt(m);
        this.mul = (this.mul * mult) % this.MOD;
        this.add = (this.add * mult) % this.MOD;
    }

    getIndex(idx) {
        if (idx >= this.seq.length) return -1;
        const val = (this.seq[idx] * this.mul + this.add) % this.MOD;
        return Number(val);
    }
}