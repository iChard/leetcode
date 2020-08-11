import LinkedList from './linkList'
class HashTable {

    constructor() {
        this.table = []
    }

    // 散列函数
    static loseloseHashCode(key) {
        let hash = 0
        for (let codePoint of key) {
            hash += codePoint.charCodeAt()
        }
        return hash % 37
    }

    // 修改和增加元素
    put(key, value) {
        const position = HashTable.loseloseHashCode(key)
        console.log(`${position} - ${key}`)
        this.table[position] = value
    }

    get(key) {
        return this.table[HashTable.loseloseHashCode(key)]
    }

    remove(key) {
        this.table[HashTable.loseloseHashCode(key)] = undefined
    }
}

/**********************解决散列冲突**************************/
// 分离链接：使用链表存储value
class HashTable {

    constructor() {
        this.table = []
    }

    // 散列函数
    static loseloseHashCode(key) {
        let hash = 0
        for (let codePoint of key) {
            hash += codePoint.charCodeAt()
        }
        return hash % 37
    }

    put(key, value) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        }
        this.table[position].append({ key, value })
    }

    get(key) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if (!node && !node.element) return undefined
            if (Object.is(node.element.key, key)) {
                return node.element.value
            } else {
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }

    remove(key) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if (!node && !node.element) return false
            if (Object.is(node.element.key, key)) {
                this.table[position].remove(node.element)
                if (this.table[position].isEmpty) {
                    this.table[position] = undefined
                }
                return true
            } else {
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }
}

// 线性探查
class HashTable {

    constructor() {
        this.table = []
    }

    // 散列函数
    static loseloseHashCode(key) {
        let hash = 0
        for (let codePoint of key) {
            hash += codePoint.charCodeAt()
        }
        return hash % 37
    }

    put(key, value) {
        const position = HashTable.loseloseHashCode(key)
        if (this.table[position] === undefined) {
            this.table[position] = { key, value }
        } else {
            let index = ++position
            while (this.table[index] !== undefined) {
                index++
            }
            this.table[index] = { key, value }
        }
        this.table[position].append({ key, value })
    }

    get(key) {
        const position = HashTable.loseloseHashCode(key)
        const getElementValue = index => {
            if (this.table[index] === undefined) return undefined
            if (Object.is(this.table[index].key, key)) {
                return this.table[index].value
            } else {
                return getElementValue(index + 1)
            }
        }
        return getElementValue(position)
    }

    remove(key) {
        const position = HashTable.loseloseHashCode(key)
        const removeElementValue = index => {
            if (this.table[index] === undefined) return false
            if (Object.is(this.table[index].key, key)) {
                this.table[index] = undefined
                return true
            } else {
                return removeElementValue(index + 1)
            }
        }
        return removeElementValue(position)
    }
}