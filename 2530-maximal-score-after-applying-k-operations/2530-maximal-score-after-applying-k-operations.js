/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    const heap = new MaxHeap();
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        heap.push(nums[i]);
    }
    for(let i=0; i<k; i++){
        let num = heap.pop();
        ans += num;
        heap.push(Math.ceil(num/3));
    }
    return ans;
};

class MaxHeap{
    constructor(){
        this.heap=[null];
    }
    swap(a,b){
        [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]];
    }
    size(){
        return this.heap.length;
    }
    pop(){
        if(this.heap.length === 1) return;
        const val = this.heap[1];
        this.heap[1] = this.heap[this.size()-1];
        this.heap.pop();
        this.bubbledown();
        return val;
    }
    push(val){
        this.heap.push(val);
        this.bubbleup();
    }
    bubbledown(){
        let index = 1;
        while(index * 2 < this.size()){
            let left = index*2;
            let right = index*2+1;
            let big = right < this.size() && this.heap[left] < this.heap[right]? right:left;
            if(this.heap[index] < this.heap[big]){
                this.swap(big,index);
                index = big;
            }else break;
        }
    }
    bubbleup(){
        let index = this.size()-1;
        while(index > 1){
            let p = index>>1;
            if(this.heap[index] <= this.heap[p]){
                break;
            }
            this.swap(index,p);
            index = p;
        }
    }
}