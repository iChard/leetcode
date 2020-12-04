/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * 1. 先记录一个prev指针，next指向head
 * 2. 记录一个curr指针为head
 * [1,2,3,3,3]
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    var cur = head;
    while (cur && cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
/**
 * 可去除任意顺序链表的重复元素（不要求排序）
 */
deleteDuplicates = function (head) {
    let _head = new ListNode(-1)
    let setHead = new ListNode(-1)
    _head.next = setHead
    let curr = head;
    let unique = []
    while (curr) {
        if (!unique.includes(curr.val)) {
            unique.push(curr.val)
            setHead.next = new ListNode(curr.val)
            setHead = setHead.next
        }
        curr = curr.next
    }
    return _head.next.next;
}

// @lc code=end

