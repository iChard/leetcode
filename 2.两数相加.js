/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (33.33%)
 * Likes:    3656
 * Dislikes: 0
 * Total Accepted:    290.2K
 * Total Submissions: 800K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//     let addOne = 0
//     let sum = new ListNode('0');
//     let head = sum
//     while (addOne || l1 || l2) {
//         let val1 = l1 !== null ? l1.val : 0;
//         let val2 = l2 !== null ? l2.val : 0;
//         let r1 = val1 + val2 + addOne;
//         addOne = r1 >= 10 ? 1 : 0
//         sum.next = new ListNode(r1 % 10)
//         sum = sum.next
//         if (l1) {
//             l1 = l1.next
//         }
//         if (l2) {
//             l2 = l2.next
//         }
//     }
//     return head.next
// };

function addTwoNumbers(l1, l2) {
    let carry = 0;//进位数
    let head = new ListNode()// 头部节点
    let sentry = head// 哨兵节点
    while (carry || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let sum = val1 + val2 + carry
        carry = sum >= 10 ? 1 : 0;
        sentry.next = new ListNode(sum % 10)
        sentry = sentry.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    console.log(head);
    return head.next;
}
// @lc code=end

