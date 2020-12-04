const Node = require('./Node.js').Node

class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
    }

    // 追加元素
    append(element) {
        const node = new Node(element)
        let current = null
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.length++
    }

    // 在任意位置插入元素
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                node.next = current
                this.head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            this.length++
            return true
        }
        return false;
    }

    // 移除指定位置元素
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next = null
            }
            this.length--
            return true
        }
        return false
    }

    // 寻找下标
    findIndex(element) {
        let current = this.head
        let index = 0
        while (current && (current.element !== element)) {
            current = current.next
            index++
        }
        if (!current) return -1// 找到最后一个依然不符合，下标置为-1
        return index
    }

    // 删除指定元素
    remove(element) {
        let index = this.findIndex(element)
        return this.removeAt(index)
    }

    isEmpty() {
        return !this.length
    }

    size() {
        return this.length
    }

    toString() {
        let current = this.head;
        let string = ''
        while (current) {
            string += `${current.element}-`
            current = current.next
        }
        string += 'null'
        // console.log(string);
        return string
    }
}
const linkedList = new LinkedList()

console.log(linkedList+'')
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)
linkedList.append(234)
linkedList.append(256)
linkedList.append(345)
linkedList.append(455)
linkedList.append(556)

linkedList.insert(0, 20)
console.log(linkedList.toString())
linkedList.removeAt(1)
console.log(linkedList+'')
console.log(linkedList.findIndex(455));
console.log(linkedList.findIndex(456));
linkedList.remove(555)//false
console.log(linkedList + '');
linkedList.remove(556)//true
console.log(linkedList + '');