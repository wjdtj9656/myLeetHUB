/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
  this.heap = [];                 
  this.info = new Map();          
  this.stampSeq = 1;

  if (tasks) {
    for (const [u, t, p] of tasks) this.add(u, t, p);
  }
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
  const stamp = this.stampSeq++;
  this.info.set(taskId, { userId, priority, stamp });
  this._push({ priority, taskId, stamp });
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
  const cur = this.info.get(taskId);
  const stamp = this.stampSeq++;
  cur.priority = newPriority;
  cur.stamp = stamp;
  this._push({ priority: newPriority, taskId, stamp });
};

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
  this.info.delete(taskId); // lazy delete
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
  while (this.heap.length) {
    const top = this.heap[0];
    const rec = this.info.get(top.taskId);

    if (!rec || rec.stamp !== top.stamp) { // stale
      this._pop();
      continue;
    }

    this._pop();
    const userId = rec.userId;
    this.info.delete(top.taskId);
    return userId;
  }
  return -1;
};

TaskManager.prototype._cmp = function(a, b) {
  if (a.priority !== b.priority) return a.priority > b.priority;
  return a.taskId > b.taskId;
};

TaskManager.prototype._push = function(node) {
  this.heap.push(node);
  this._siftUp(this.heap.length - 1);
};

TaskManager.prototype._pop = function() {
  const h = this.heap;
  const last = h.pop();
  if (!h.length) return last;
  const ret = h[0];
  h[0] = last;
  this._siftDown(0);
  return ret;
};

TaskManager.prototype._siftUp = function(i) {
  const h = this.heap;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (this._cmp(h[p], h[i])) break;
    [h[p], h[i]] = [h[i], h[p]];
    i = p;
  }
};

TaskManager.prototype._siftDown = function(i) {
  const h = this.heap, n = h.length;
  while (true) {
    let best = i;
    const l = i * 2 + 1, r = i * 2 + 2;
    if (l < n && this._cmp(h[l], h[best])) best = l;
    if (r < n && this._cmp(h[r], h[best])) best = r;
    if (best === i) break;
    [h[i], h[best]] = [h[best], h[i]];
    i = best;
  }
};

/** 
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
