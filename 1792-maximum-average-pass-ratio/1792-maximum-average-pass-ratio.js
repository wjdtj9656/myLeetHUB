class MaxHeap {
  constructor() {
    this.arr = [null];
  }
  size() {
    return this.arr.length;
  }
  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }
  push(obj) {
    // obj는 {increase, pass, total} 형태를 가정
    this.arr.push(obj);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 1) {
      return null;
    }
    const val = this.arr[1];
    this.arr[1] = this.arr[this.size() - 1];
    this.arr.pop();
    this.bubbleDown();
    return val;
  }
  bubbleUp() {
    let index = this.size() - 1;
    while (index > 1) {
      const p = index >> 1;
      if (this.arr[index].increase <= this.arr[p].increase) {
        break;
      }
      this.swap(index, p);
      index = p;
    }
  }
  bubbleDown() {
    let index = 1;
    while (index * 2 < this.size()) {
      let left = index * 2;
      let right = index * 2 + 1;
      let big = left;
      if (right < this.size() && this.arr[left].increase <= this.arr[right].increase) {
        big = right;
      }
      if (this.arr[index].increase < this.arr[big].increase) {
        this.swap(index, big);
        index = big;
      } else {
        break;
      }
    }
  }
}
function calcIncrease(pass, total) {
  return (pass + 1) / (total + 1) - (pass / total);
}
function maxAverageRatio(classes, extraStudents) {
  const heap = new MaxHeap();
  
  for (const [pass, total] of classes) {
    heap.push({
      pass,
      total,
      increase: calcIncrease(pass, total)
    });
  }
  
  for (let i = 0; i < extraStudents; i++) {
    const top = heap.pop();
    const newPass = top.pass + 1;
    const newTotal = top.total + 1;
    heap.push({
      pass: newPass,
      total: newTotal,
      increase: calcIncrease(newPass, newTotal)
    });
  }
  
  let sum = 0;
  let count = heap.size() - 1; 
  for (let i = 1; i < heap.size(); i++) {
    const { pass, total } = heap.arr[i];
    sum += pass / total;
  }
  
  return sum / count;
}
