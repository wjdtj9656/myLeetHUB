
class BIT {
  constructor(n) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0);
  }
  update(i, delta) {
    i++;
    while (i <= this.n) {
      this.tree[i] += delta;
      i += i & (-i);
    }
  }
  query(i) {
    let sum = 0;
    i++;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & (-i);
    }
    return sum;
  }
}

function goodTriplets(nums1, nums2) {
  const n = nums1.length;
  const pos2 = new Array(n);
  for (let i = 0; i < n; i++) {
    pos2[nums2[i]] = i;
  }
  const arr = nums1.map(value => pos2[value]);
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const bitLeft = new BIT(n);
  for (let j = 0; j < n; j++) {
    left[j] = bitLeft.query(arr[j] - 1);
    bitLeft.update(arr[j], 1);
  }
  const bitRight = new BIT(n);
  for (let j = n - 1; j >= 0; j--) {
    right[j] = bitRight.query(n - 1) - bitRight.query(arr[j]);
    bitRight.update(arr[j], 1);
  }
  let result = 0;
  for (let j = 0; j < n; j++) {
    result += left[j] * right[j];
  }
  return result;
}