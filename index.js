/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode(-1)
    let copy = new ListNode(-1)
    dummy.next = copy
    let curr = head;
    let unique = []
    while (curr && curr.next) {
        if (!unique.includes(curr.val)) {
            unique.push(curr.val)
            copy.next = new ListNode(curr.val)
            copy = copy.next
        }
        curr = curr.next
    }
    return dummy.next.next;
}