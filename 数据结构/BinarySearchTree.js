class Node {
    constructor(key) {
        this.key = key;
        this.left = null
        this.right = null
    }
}

//  二叉搜索树
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(key) {
        let newNode = new Node(key)
        let insertNode = (node, newNode) => {
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
    // 中序排列
    inOrderTraverse(callback) {
        let arr = []
        const inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                // console.log('node-', node)
                inOrderTraverseNode(node.left, callback)// 1. left执行之后才会执行下一步
                arr.push(node.key)
                // callback(node.key) // 2. 打印当前key值
                inOrderTraverseNode(node.right, callback) // 2.
            }
        }
        inOrderTraverseNode(this.root, callback)
        // console.log(arr)
        return arr;
    }

    // 先序排列
    preOrderTraverse() {
        let arr = [];
        let preOrderTraverseNode = (node) => {
            if (node !== null) {
                arr.push(node.key)
                preOrderTraverseNode(node.left)
                preOrderTraverseNode(node.right)
            }
        }
        preOrderTraverseNode(this.root)
        return arr;
    }

    // 后序排列
    postOrderTraverse() {
        let arr = [];
        let postOrderTraverseNode = (node) => {
            if (node !== null) {
                postOrderTraverseNode(node.left)
                postOrderTraverseNode(node.right)
                arr.push(node.key)
            }
        }
        postOrderTraverseNode(this.root)
        return arr;
    }
    min() {
        const minNode = (node) => {
            return node.left === null ? node.key : minNode(node.left)
        }
        return minNode(this.root)
    }

    max() {
        const maxNode = (node) => {
            return node.right === null ? node.key : maxNode(node.right)
        }
        return maxNode(this.root)
    }
    search(key) {
        const searchNode = (node, key) => {
            if (node === null) return;
            if (node.key === key) return node;
            return searchNode(key < node.key ? node.left : node.right, key)
        }
        return searchNode(this.root, key)
    }

    remove(key) {
        const removeNode = (node, key) => {
            if (node === null) return false
            if (node.key === key) {
                console.log(node)
                if (node.left === null && node.right === null) {
                    let _node = node
                    node = null
                    return _node
                } else {
                    console.log('key', key)
                }
            } else if (node.left !== null && node.key > key) {
                if (node.left.key === key) {
                    node.left.key = this.min(node.left.right).key
                    removeNode(node.left.right, node.left.key)
                    return node.left
                } else {
                    return removeNode(node.left, key)
                }
            } else if (node.right !== null && node.key < key) {
                if (node.right.key === key) {
                    node.right.key = this.min(node.right.right).key
                    removeNode(node.right.right, node.right.key)
                    return node.right
                } else {
                    return removeNode(node.right, key)
                }
            } else {
                return false
            }
            return removeNode((key < node.key) ? node.left : node.right, key)
        }
        return removeNode(this.root, key)
    }
}


const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(6)
tree.insert(9)
tree.insert(8)
tree.insert(15)
tree.insert(13)
tree.insert(3)
tree.insert(10)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

console.log(tree.inOrderTraverse())
console.log(tree.preOrderTraverse())
console.log(tree.postOrderTraverse())
console.log(tree.min())
console.log(tree.max())
console.log(tree.search(12))