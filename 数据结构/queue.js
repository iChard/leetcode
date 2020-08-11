// 先进先出
// 普通队列
class Queue {
    constructor() {
        this.items = []
    }

    //入队
    enqueue(element) {
        this.items.push(element)
    }

    //出队
    dequeue() {
        return this.items.shift()
    }

    // 首位
    front() {
        return this.items[0]
    }

    // 清空队列
    clear() {
        this.items = []
    }

    // 队列大小
    get size() {
        return this.items.length
    }

    // 是否未空队列
    get isEmpty() {
        return !this.items.length
    }

    // 打印队列数据
    print() {
        console.log(this.items.toString())
    }
}

var queue = new Queue()

queue.enqueue(1)
queue.enqueue(3)
queue.enqueue(5)

console.log(queue.isEmpty)
console.log(queue.size)
console.log(queue.front())
queue.dequeue()
queue.print()
console.log(queue.front())

console.log('------分隔符-优先队列------')
// 优先队列
class PriorityQueue {

    constructor() {
        this.items = []
    }
    // priority表示优先级，越小优先级越高
    enqueue(element, priority) {
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items.push(queueElement)
        } else {
            const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueElement)
            } else {
                this.items.push(queueElement)
            }
        }
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    clear() {
        this.items = []
    }

    get size() {
        return this.items.length
    }

    get isEmpty() {
        return !this.items.length
    }

    print() {
        console.log(this.items)
    }
}
const priorityQueue = new PriorityQueue()


priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.enqueue('Surmon', 3)
priorityQueue.enqueue('skyRover', 2)
priorityQueue.enqueue('司马萌', 1)
console.log(priorityQueue.dequeue())
priorityQueue.print()

console.log(priorityQueue.isEmpty, priorityQueue.size) // false 6

console.log('------分隔符-循环队列------')
// 循环队列
class LoopQueue extends Queue {
    constructor(items) {
        super(items)
    }

    getIndex(index) {
        return index > this.items.length ? (index % this.items.length) : index
    }

    find(index) {
        return this.isEmpty ? null : this.items[this.getIndex(index)]
    }
}

const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')
console.log(loopQueue.size, loopQueue.isEmpty) // 4 false

console.log(loopQueue.find(26)) // 'Evan'
console.log(loopQueue.find(87651)) // 'Alice'