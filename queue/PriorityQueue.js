// 优先队列
class PriorityQueue {

    constructor() {
        this.items = []//[{ele, priority}]
    }

    enqueue(element, priority) {
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items.push(queueElement)
        } else {
            const preIndex = this.items.findIndex(item => queueElement.priority < item.priority)
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueElement)
            } else {
                this.items.push(queueElement)
            }
        }
    }

    dequeue() {
        this.items.shift()
    }

    front() {
        return this.items[0]
    }

    clear() {
        this.items = []
    }

    get Size() {
        return this.items.length
    }

    get isEmpty() {
        return !this.items.length
    }

    print() {
        console.log(this.items);
    }
}

const pq = new PriorityQueue()
console.log(pq.isEmpty);
pq.enqueue('age: 99', 0)
pq.enqueue('age: 95', 1)
pq.enqueue('age: 94', 2)
pq.enqueue('age: 93', 3)
pq.enqueue('age: 90', 4)
pq.print()

module.exports = PriorityQueue