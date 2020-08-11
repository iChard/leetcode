/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * 
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let node = new ListNode(1)
var reverseList = function (head) {
    var prev = null;
    var curr = head;
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var reverseList = function (head) {
    var prev = null;
    var curr = head;
    while (curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next]
    }
    return prev
}
let arr = [1, 2, 3]
reverseList(arr)
console.log(arr)

var reverseList = function (head) {
    return reverseList(null, head)
}

function reverse(prev, curr) {
    if(!curr) {
        return prev
    }
    
}
// @lc code=end

