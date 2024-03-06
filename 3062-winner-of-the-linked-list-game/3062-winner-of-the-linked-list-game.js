/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function(head) {
        let odds = 0;
    let evens = 0;

    let current = head;
    while (current && current.next) {
        const [even, odd] = [current.val, current.next.val];

        if (odd > even) {
            odds++;
        }

        if (even > odd) {
            evens++
        }

        current = current.next.next;
    }

    if (odds > evens) {
        return 'Odd';
    } else if (evens > odds) {
        return 'Even';
    } else {
        return 'Tie';
    }
};