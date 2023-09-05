/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;

    const oldToNew = new Map();
    let now = head;
    while(now){
        oldToNew.set(now, new Node(now.val));
        now = now.next;
    }
    now = head;
    while(now){
        oldToNew.get(now).next = oldToNew.get(now.next) || null;
        oldToNew.get(now).random = oldToNew.get(now.random) || null;
        now = now.next;
    }
    return oldToNew.get(head);
};