/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
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
// 解法一：先颠倒，再删除，再颠倒
var removeNthFromEnd = function (head, n) {
    if (!head || !head.next) return null;
    let dummy = new ListNode(-1)
    let curr;
    let reverseList = function (head) {
        let _prev = null
        let _curr = head
        while (_curr) {
            let temp = _curr.next
            _curr.next = _prev
            _prev = _curr
            _curr = temp
        }
        return _prev
    }
    curr = reverseList(head)
    dummy.next = curr;
    curr = dummy
    for (let i = 0; i < n; i++) {
        if (i == n - 1) {
            curr.next = curr.next.next
            break;
        } else {
            curr = curr.next
        }
    }
    return reverseList(dummy.next)
};
/**
 * 快慢指针方式：先将快指针挪至head+n个位置（记得是head+n个位置）；
 * 然后慢指针在head位置
 * 此时同时挪动快慢指针，当快指针到末尾时，慢指针刚好在目标的前一个位置
 */
removeNthFromEnd = function (head, n) {
    let fast = head
    let slow = head
    for (let i = 1; i <= n; i++) {
        fast = fast.next
    }
    if (!fast.next) return head.next;
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head;
}
// @lc code=end

