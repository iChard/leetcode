// let obj
// 翻转链表
function reverseList(head) {
    let prev = null
    let curr = head
    while (curr) {
        let temp = curr.next;
        curr.next = prev
        prev = curr
        curr = temp
    }
    return curr
}

// 翻转链表指定元素
// [1,2,3,4,5,6,7,8,9] m: 3 n:7==>[1,2,7,6,5,4,3,8,9]
function reverseBetween(head, m, n) {
    let dummy = new ListNode(0)
    dummy.next = head;
    let tempHead = dummy;
    for (let i = 0; i < m - 1; i++) {
        tempHead = tempHead.next// 2,3,4,5,6,7,8,9
    }
    let curr = tempHead.next//3,4,5,6,7,8,9
    let prev = null
    for (let i = 1; i <= n - m; i++) {
        let temp = curr.next;
        curr.next = prev
        prev = curr//7
        curr = temp// 8,9
    }// 7,6,5,4,3,null
    // temphead: 2,3, null
    tempHead.next.next = curr
    tempHead.next = prev
    return dummy.next
}