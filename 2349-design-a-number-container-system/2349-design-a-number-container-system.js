// 간단한 최소 힙(PriorityQueue) 구현 예시
class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  
  _compare(i, j) {
    return this.heap[i] > this.heap[j];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 0) return undefined;
    this._swap(0, this.heap.length - 1);
    const poppedValue = this.heap.pop();
    this._heapifyDown(0);
    return poppedValue;
  }

  peek() {
    return this.heap[0] !== undefined ? this.heap[0] : undefined;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp(idx) {
    let currentIndex = idx;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this._compare(parentIndex, currentIndex)) {
        this._swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  _heapifyDown(idx) {
    const length = this.heap.length;
    let currentIndex = idx;

    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let nextIndex = currentIndex;

      if (leftIndex < length && this._compare(nextIndex, leftIndex)) {
        nextIndex = leftIndex;
      }
      if (rightIndex < length && this._compare(nextIndex, rightIndex)) {
        nextIndex = rightIndex;
      }

      if (nextIndex !== currentIndex) {
        this._swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      } else {
        break;
      }
    }
  }
}


class NumberContainers {
  constructor() {
    this.indexToNumber = new Map();
    this.numberToIndices = new Map();
  }

  /**
   * @param {number} index
   * @param {number} number
   * @return {void}
   */
  change(index, number) {
    this.indexToNumber.set(index, number);

    if (!this.numberToIndices.has(number)) {
      this.numberToIndices.set(number, new MinHeap());
    }
    this.numberToIndices.get(number).push(index);
  }

  /**
   * @param {number} number
   * @return {number}
   */
  find(number) {
    if (!this.numberToIndices.has(number)) {
      return -1;
    }

    const heap = this.numberToIndices.get(number);

    while (heap.size() > 0) {
      const minIndex = heap.peek();
      if (this.indexToNumber.get(minIndex) === number) {
        return minIndex;
      }
      heap.pop();
    }

    return -1;
  }
}

