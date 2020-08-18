/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// 暴力破解
var hasCycle = (head) => {
    let cur = head;     // cur指针
    let step1 = 0;      // step1统计cur指针走的步数
    while (cur) {
        step1++
        let cur2 = head;   // cur2指针 从头开始
        let step2 = 0;     // step2统计cur2指针走的步数
        while (cur2) {
            step2++;
            if (cur == cur2) {      // cur和cur2指针指向相同的元素
                if (step1 == step2) { // cur2指针和cur走的步数一样，走到了cur这里
                    break;              // 退出内层循环
                } else {              // cur2指针和cur相遇，但步数不一样
                    return true;        // 说明链表有环，cur比cur2正好多走一个环
                }
            }
            cur2 = cur2.next; // cur2一次走一步
        }
        cur = cur.next;     // cur一次走一步
    }
    return false;
};

// 哈希表记录
var hasCycle = (head) => {
    let map = new Map()
    while (head) {
        if (map.has(head)) return true
        map.set(head, true)
        head = head.next
    }
    return false
}

// 快慢指针
var hasCycle = head => {
    let fastP = head
    let slowP = head
    while (fastP) {
        if (fastP.next === null) return false
        slowP = slowP.next
        fastP = fastP.next.next
        if (slowP == fastP) return true;
    }
    return false
}

// 修改原链表，记录修改走过的节点
var hasCycle = function(head) {
    while(head){
        if (head.val==='rhinoc.top') return true;
        else head.val='rhinoc.top';
        head = head.next;
    }
    return false
};

// 利用json.stringify不能字符串化含有循环引用的结构
var hasCycle = function(head) {
    try{
        JSON.stringify(head);
        return false;
    }
    catch(err){
        return true;
    }
};

// @lc code=end

