/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const heap = new MinHeap();
    const n = times.length;
    const events = [];
    for(let i=0; i<n; i++){
        const [arrive, leave] = times[i];
        events.push([arrive,0,i]); // 도착 이벤트
        events.push([leave,1,i]);  // 떠나는 이벤트
    }
    events.sort((a,b)=>{
        if(a[0] !== b[0]) return a[0] - b[0];
        return b[1] - a[1]; // 떠나는 이벤트를 먼저 처리
    })
    const chair = {};
    let nextChair = 0;
    for(const [time, type, index] of events){
        if(type == 0){
            let num;
            if(heap.size() > 0){
                num = heap.pop();
            }else{
                num = nextChair;
                nextChair++;
            }
            chair[index] = num;
            if(index == targetFriend) return num;
        }else{
            const num = chair[index];
            delete chair[index];
            heap.push(num);
        }
    }
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.size() - 1);
    }

    pop() {
        if (this.size() === 0) return undefined;
        const val = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return val;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parent]) break;
            this.swap(index, parent);
            index = parent;
        }
    }

    bubbleDown(index) {
        const length = this.size();
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }
}