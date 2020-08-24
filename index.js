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
var removeNthFromEnd = function (head, n) {
    let fast = head, stack = head;
    while (--n) {
        fast = fast.next;
    }
    if (!fast.next) return head.next;
    fast = fast.next;
    while (fast && fast.next) {
        fast = fast.next;
        stack = stack.next;
    }
    stack.next = stack.next.next;
    return head;
};
removeNthFromEnd = function (head, n) {
    let fast = head
    let slow = head
    for (let i = 1; i <= n; i++) {
        fast = head.next
    }
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head;
}