/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.arr = [...nums];
    this.map = {};
    for(let i=0; i<this.arr.length; i++){
      if(!this.map[this.arr[i]]) this.map[this.arr[i]] = 0;
      this.map[this.arr[i]]+=1;
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    const n = this.arr.length;
    for(let i=0; i<n; i++){
      if(this.map[this.arr[i]] == 1){
        return this.arr[i];
      }
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.arr.push(value);
    if(!this.map[value]) this.map[value] = 0;
    this.map[value]+=1;
    return null;
};