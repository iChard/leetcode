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
/** 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let curr = head
    while (curr) {
        let temp = curr.next
        curr.next = prev;
        prev = curr
        curr = temp
    }
    return prev
};


// 自递归法
var reverseList = function (node) {
    if (!node || !node.next) return node;//1. 执行到链表最后一个元素时，判断结束，返回上一个元素的逻辑判断
    let next = node.next//2.
    let reverseHead = reverseList(next)//3.(1,2,3)步会一直递归到最后一个元素，并根据1的判断返回最后一个元素，
    node.next = null;// 4. 将上一个元素的next置为null（这一步主要是为了反转到最后一步需要将最后一个节点的的末尾裁剪掉）
    next.next = node// 5. 将下一个元素的next置为上一个元素，即逐步达到反转的效果
    return reverseHead// 6. 返回曾经的最后一个节点
}

// 尾递归法(跟迭代比较像，都是依次将最近的两个节点交换，不过使用了函数的递归形式)
var reverseList = function (head) {
    const reverse = (prev, curr) => {
        if (!curr) return prev;// 递归到最后一个节点null时返回上一个节点
        let temp = curr.next
        curr.next = prev
        return reverse(curr, temp)
    }
    return reverse(null, head)
}
// @lc code=end

