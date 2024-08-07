/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root;
    
    let queue = [root];
    let tempQueue = [];
        
    while(queue.length){
        let curr = queue.shift();
        let {left, right} = curr;
                
        if (left) tempQueue.push(left);
        if (right) tempQueue.push(right);
        
        if (queue.length === 0){
            curr.next = null;
            queue = tempQueue;
            tempQueue = [];
        }else{
            curr.next = queue[0];
        }
    }
    
    return root;
};