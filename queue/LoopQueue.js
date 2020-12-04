const Queue = require('./Queue')
// 循环队列
class LoopQueue extends Queue {

    constructor(items) {
        super(items)
    }

    getIndex(index) {
        const len = this.items.length
        return index > len ? (index % len) : index
    }

    find(index) {
        return !this.isEmpty ? this.items[this.getIndex(index)] : null
    }
}
const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')
loopQueue.enqueue('Back')
console.log(loopQueue.size, loopQueue.isEmpty) // 4 false

console.log(loopQueue.find(26)) // 'Evan'
console.log(loopQueue.find(874)) // 'Alice'

module.exports = LoopQueue;