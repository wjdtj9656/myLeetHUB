class TwoSum {
    constructor() {
        this.map = new Map();
    }
    add(number) {
        this.map.set(number, this.map.get(number) + 1 || 1);
    }
    find(value) {
        for(const num of this.map.keys()) {
            const rest = value - num;
            if(rest === num) {
                if(this.map.get(num) > 1) return true;
                else continue;
            }
            else if(this.map.has(rest)) return true;
        }
        return false;
    }
}