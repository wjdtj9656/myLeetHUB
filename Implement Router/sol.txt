var Router = function(memoryLimit) {
    this.limit = memoryLimit;
    this.queue = [];
    this.qHead = 0;
    this.size = 0;
    this.packetSet = new Set();
    this.destMap = new Map(); // dest -> {arr: [], head: 0}
};

function lowerBound(arr, start, val) {
    let l = start, r = arr.length;
    while (l < r) {
        const m = (l + r) >> 1;
        if (arr[m] >= val) r = m;
        else l = m + 1;
    }
    return l;
}
function upperBound(arr, start, val) {
    let l = start, r = arr.length;
    while (l < r) {
        const m = (l + r) >> 1;
        if (arr[m] > val) r = m;
        else l = m + 1;
    }
    return l;
}

Router.prototype._removeOldest = function() {
    if (this.size === 0) return;
    const pkt = this.queue[this.qHead++];
    this.size--;
    const key = `${pkt[0]}-${pkt[1]}-${pkt[2]}`;
    this.packetSet.delete(key);
    const dest = pkt[1], ts = pkt[2];
    const obj = this.destMap.get(dest);
    if (obj) {
        obj.head++;
        if (obj.head > 1000 && obj.head * 2 >= obj.arr.length) {
            obj.arr = obj.arr.slice(obj.head);
            obj.head = 0;
        }
        if (obj.head >= obj.arr.length) this.destMap.delete(dest);
    }
};

Router.prototype.addPacket = function(source, destination, timestamp) {
    const key = `${source}-${destination}-${timestamp}`;
    if (this.packetSet.has(key)) return false;
    if (this.size === this.limit) this._removeOldest();
    this.queue.push([source, destination, timestamp]);
    this.size++;
    this.packetSet.add(key);
    if (!this.destMap.has(destination)) this.destMap.set(destination, {arr: [], head: 0});
    this.destMap.get(destination).arr.push(timestamp);
    return true;
};

Router.prototype.forwardPacket = function() {
    if (this.size === 0) return [];
    const pkt = this.queue[this.qHead++];
    this.size--;
    const key = `${pkt[0]}-${pkt[1]}-${pkt[2]}`;
    this.packetSet.delete(key);
    const dest = pkt[1], ts = pkt[2];
    const obj = this.destMap.get(dest);
    if (obj) {
        obj.head++;
        if (obj.head > 1000 && obj.head * 2 >= obj.arr.length) {
            obj.arr = obj.arr.slice(obj.head);
            obj.head = 0;
        }
        if (obj.head >= obj.arr.length) this.destMap.delete(dest);
    }
    return pkt;
};

Router.prototype.getCount = function(destination, startTime, endTime) {
    const obj = this.destMap.get(destination);
    if (!obj) return 0;
    const arr = obj.arr, h = obj.head;
    const l = lowerBound(arr, h, startTime);
    const r = upperBound(arr, h, endTime);
    return Math.max(0, r - l);
};