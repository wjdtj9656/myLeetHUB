/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let before = new ListNode(0);
    let after = new ListNode(0);
    let curr_before = before;
    let curr_after = after;

    while(head !== null){
        if(head.val < x){
            curr_before.next = head;
            curr_before = curr_before.next;
        }
        else{
            curr_after.next = head;
            curr_after = curr_after.next;
        }
        head = head.next;
    }
    curr_after.next = null;
    curr_before.next = after.next;

    return before.next;
};