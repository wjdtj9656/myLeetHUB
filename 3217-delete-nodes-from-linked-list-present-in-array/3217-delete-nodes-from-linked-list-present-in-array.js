/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    return removeValues(head,nums);
};

function removeValues(head, nums) {
  const ban = new Set(nums);

  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (ban.has(curr.val)) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
}
