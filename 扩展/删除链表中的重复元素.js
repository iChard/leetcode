/*
 * 删除链表中的重复元素
 * 注意：并不需要是排序链表
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
 * 主要是新建一个链表，遇到重复的绕过，否则添加到链表中
 * @param {ListNode} head
 * @return {ListNode}
 */
deleteDuplicates = function (head) {
    let dummy = new ListNode(-1)
    let copy = new ListNode(-1)
    dummy.next = copy
    let curr = head;
    let unique = []
    while (curr) {
        if (!unique.includes(curr.val)) {
            unique.push(curr.val)
            copy.next = new ListNode(curr.val)
            copy = copy.next
        }
        curr = curr.next
    }
    return dummy.next.next;
}