/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */

// 递归
var swapPairs = function (head) {
    if (head === null || head.next === null) return head
    var next = head.next;
    head.next = swapPairs(next.next)
    next.next = head;
    return next;
}
// @lc code=end

