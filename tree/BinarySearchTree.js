const Node = require('./Node').Node

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }

        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }

    inOrderTraverse(callback) {
        const inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback)
                callback(node.key)
                inOrderTraverseNode(node.right, callback)
            }
        }
        inOrderTraverseNode(this.root, callback)
    }

    preOrderTraverse(callback) {
        const preOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                callback(node.key)
                preOrderTraverseNode(node.left, callback)
                preOrderTraverseNode(node.right, callback)
            }
        }
        preOrderTraverseNode(this.root, callback)
    }

    postOrderTraverse(callback) {
        const postOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback)
                postOrderTraverseNode(node.right, callback)
                callback(node.key)
            }
        }
        postOrderTraverseNode(this.root, callback)
    }

    minNode(node) {
        const minNode = node => {
            return node ? (node.left ? minNode(node.left) : node) : null
        }
        return minNode(node || this.root)
    }

    maxNode(node) {
        const maxNode = (node) => {
            return node ? (node.right ? maxNode(node.right) : node) : null
        }
        return maxNode(node || this.root)
    }

    search(key) {
        const searchNode = (node, key) => {
            if (node === null) return false
            if (key === node.key) {
                return node
            }
            if (key > node.key) {
                return searchNode(node.right, key)
            } else {
                return searchNode(node.left, key)
            }
        }
        return searchNode(this.root, key)
    }
    // 移除某个节点
    remove(key) {
        const removeNode = (node, key) => {
            if (node === null) return false
            if (key === node.key) {
                // ...
            } else if (key < node.key && (node.left !== null)) {
                removeNode(node.left, key)
            } else if (key > node.key && (node.right !== null)) {
                removeNode(node.right, key)
            } else {
                return false
            }
        }
        removeNode(this.root, key)
    }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(6)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.inOrderTraverse(console.log)
// tree.preOrderTraverse(console.log)
// tree.postOrderTraverse(console.log)
console.log(tree.maxNode());
console.log(tree.minNode());
console.log(tree.search(18));