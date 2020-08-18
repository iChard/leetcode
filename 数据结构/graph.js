const Dictionary = require('./dictionary')
// 邻接表
class Graph {

    constructor() {
        this.vertices = []
        this.adjList = new Dictionary()
    }

    // 添加顶点
    addVertex(v) {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }

    // 添加线
    addEdge(v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString() {
        return this.vertices.reduce((r, v) => {
            return this.adjList.get(v).reduce((r, w) => {
                return r + `${w} `
            }, `${r}\n${v} => `)
        }, '')
    }

    // breadth first search BFS，队列
    bfs(v, cb) {// 待查顶点：v
        const read = []// 已读节点
        let pending = [v || this.vertices[0]]// 待读节点
        const distances = {}// 各节点距离顶点的距离
        const predecessors = {}// 前任节点
        const adjList = this.adjList// 每个节点的边集合
        const readVertices = vertices => {
            vertices.forEach(key => {// key：上级节点
                read.push(key)// 遍历&&存储已读节点
                pending.shift()// 使用队列形式，依次读取最接近顶点的节点
                distances[key] = distances[key] || 0// key节点距离顶点的距离：初始化为0(遍历一层加1)
                predecessors[key] = predecessors[key] || null
                adjList.get(key).forEach(v => {
                    if (!pending.includes(v) && !read.includes(v)) {
                        pending.push(v)// 将第一层节点存入待读节点
                        distances[v] = distances[key] + 1// 
                        predecessors[v] = key
                    }
                })
                cb && cb(key)
                if (pending.length) {
                    readVertices(pending)
                }
            })
        }
        readVertices(pending)
        return { distances, predecessors }
    }

    // 寻找目标节点和其他节点的边， fromVertex：目标节点
    distance(fromVertex) {
        const vertices = this.vertices
        const { distances, predecessors } = this.bfs(fromVertex)// 当前节点和其他节点的距离以及通过当前节点计算的每一个节点的上级节点
        vertices.forEach(toVertex => {
            if (!!distances[toVertex]) {//不是当前节点（即与fromVertex节点存在距离）
                let preVertex = predecessors[toVertex]//找到当前节点的父节点
                let slug = ''
                while (fromVertex !== preVertex) {// 当父级节点未前溯到节点本身时，则一直添加线
                    slug = `${preVertex} -> ${slug}`
                    preVertex = predecessors[preVertex]
                }
                slug = `${fromVertex} -> ${slug}${toVertex}`
                console.log(slug)
            }
        })
    }

    // depth first search DFS, 栈
    dfs(callback) {
        let readTimer = 0
        const read = [] //已读节点
        const readTimes = {}// 每个节点是被发现所用的时间
        const finishedTimes = {}// 每个节点写入到read时用的时间（即利用完所用的时间）
        const predecessors = {}// 当前顺序便利时各个节点的上级节点
        const adjList = this.adjList// 边
        const readVertices = (vertices, predecessor) => {// predecessor: 上级节点
            vertices.forEach((key, loopTimes) => {
                readTimer++
                if (adjList.get(key).every(v => read.includes(v)) && !finishedTimes[key]) {//当前节点的每个相邻节点均已读且
                    finishedTimes[key] = readTimer
                }
                if (read.includes(key)) return false
                readTimes[key] = readTimer
                read.push(key)
                if (callback) callback(key)
                predecessors[key] = predecessors[key] || predecessor || null
                if (read.length !== this.vertices.length) {
                    readVertices(adjList.get(key), key)// 这里的key就是下一次遍历节点的上级节点
                }
            })
        }
        readVertices(adjList.keys)
        return { readTimer, read, readTimes, finishedTimes, predecessors }
    }
}


const graph = new Graph();

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(c => graph.addVertex(c))

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log('vertices:', graph.vertices)
console.log('adjList:', graph.adjList)

// console.log(graph.toString())
let res = graph.bfs(graph.vertices[0], v => {
    // console.log('Visited vertices:', v)
})
// console.log('res:', res)
// graph.distance(graph.vertices[0])
// console.log(graph.adjList)
let _res = graph.dfs()
console.log('dfs res:', _res)