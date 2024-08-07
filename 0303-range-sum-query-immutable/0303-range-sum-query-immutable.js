function NumArray(nums) {
  this.sums = [];
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    this.sums.push(sum);
  }
}

NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
};