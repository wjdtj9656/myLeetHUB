const minStoneSum = (a, k) => {
    let pq = new MaxPriorityQueue();
    for (const e of a) pq.enqueue(e);
    while(k--) {
        let cur = pq.dequeue().element;
        let remove = parseInt(cur / 2);
        pq.enqueue(cur - remove);
    }
    let arr = pq.toArray();
    let res = 0;
    for (const e of arr) {
        res += e.element;
    }
    return res;
};