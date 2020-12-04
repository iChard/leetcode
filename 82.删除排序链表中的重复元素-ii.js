/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
// 主要是通过将非重复元素添加到一个空链表中
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let _head = new ListNode(-1)// 哨兵节点
    let unique = new ListNode(-1)// 去重指针
    _head.next = unique;// 关联哨兵节点和去重指针
    let curr = head
    let dumpMaps = {}// 重复元素匹配表
    while (curr) {
        if ((curr.next && (curr.val === curr.next.val)) || dumpMaps[curr.val + '']) {// 相邻重复或者重复表匹配时
            dumpMaps[curr.val + ''] = true// 重复表标识
        } else {//非重复元素
            unique.next = new ListNode(curr.val);
            unique = unique.next
        }
        curr = curr.next
    }
    return _head.next.next;
};

// [1,2,3,4,4]
deleteDuplicates = function (head) {
    let sentry = new ListNode(-1)
    sentry.next = head
    let curr = head;
    let slow = sentry
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            let sameVal = curr.val
            while (curr && curr.val === sameVal) {
                curr = curr.next
            }
            slow.next = curr
        } else {
            curr = curr.next
            slow = slow.next
        }
    }
    return sentry.next
}

// @lc code=end


