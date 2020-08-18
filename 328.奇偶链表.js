/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let index = 1;
    let curr = head
    let first, second;
    if (index === 1) {
        first = head;
        second = first.next
    }
    const jump = (curr) => {
        // console.log('3:curr.next', curr.next)
        let next = curr && curr.next
        let _next = next && next.next
        console.log('2-1:curr', curr)
        console.log('3-1:next', next)
        console.log('4-1:index', index)
        if (!next && (index % 2 === 0)) {// 最后一个偶数位
            console.log('over')
            return false;
        } else {
            if (!_next || (!next && (index % 2 === 1))) {// 最后一个奇数位
                console.log('------4------')
                index = 0;
                curr._next = second;
                curr = second;
                console.log('---curr', curr)
                console.log('---curr.next', curr.next)
            } else {
                console.log('------5------')
                curr._next = _next;
                curr = _next;
            }
            index += 2
            return jump(curr)
        }
    }

    jump(curr)
    console.log(first)
    return first
};
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
// var oddEvenList = function (head) {
//     if (!head || !head.next) return head;
//     const dummyHead1 = {
//         next: head
//     }
//     const dummyHead2 = {
//         next: head.next
//     }

//     let odd = dummyHead1.next
//     let even = dummyHead2.next
//     while (odd && odd.next && even && even.next) {
//         const oddNext = odd.next.next
//         const evenNext = even.next.next
//         odd.next = oddNext
//         even.next = evenNext

//         odd = oddNext
//         even = evenNext
//     }

//     odd.next = dummyHead2.next
//     return dummyHead1.next
// }
/**
 * 
 * @param {*} head 
 */
var oddEvenList = function (head) {
    if (!head) { return head; }
    let evenHead = head.next;


    let oddNode = head
    let evenNode = head.next
    while (oddNode.next && oddNode.next.next) {
        oddNode.next = oddNode.next.next
        evenNode.next = evenNode.next.next

        oddNode = oddNode.next
        evenNode = evenNode.next
    }
    oddNode.next = evenHead
    return head
};
// @lc code=end-567901`
