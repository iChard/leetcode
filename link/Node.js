class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class DNode {
    constructor(element) {
        this.element = element
        this.prev = null
        this.next = null
    }
}

module.exports = {
    Node,
    DNode
}