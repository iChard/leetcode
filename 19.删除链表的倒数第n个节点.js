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
// @lc code=end

