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
        return this.vertices.reduce((r, v, i) => {
            return this.adjList.get(v).reduce((r, w, i) => {
                return r + `${w} `
            }, `${r}\n${v} => `)
        }, '')
    }

    // breadth first search BFS
    bfs(v, cb) {
        const read = []
        const distances = {}
        const predecessors = {}
        const adjList = this.adjList
        let pending = [v || this.vertices[0]]
        const readVertices = vertices => {
            vertices.forEach(key => {
                read.push(key)
                pending.shift()
                distances[key] = distances[key] || 0
                predecessors[key] = predecessors[key] || null
                adjList.get(key).forEach(v => {
                    if (!pending.includes(v) && !read.includes(v)) {
                        pending.push(v)
                        distances[v] = distances[key] + 1
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

    distance(fromVertex) {
        const vertices = this.vertices
        const { distances, predecessors } = this.bfs(fromVertex)
        vertices.forEach(toVertex => {
            if (!!distances[toVertex]) {
                let preVertex = predecessors[toVertex]
                let slug = ''
                while (fromVertex !== preVertex) {
                    slug = `${preVertex} -> ${slug}`
                    preVertex = predecessors[preVertex]
                }
                slug = `${fromVertex} -> ${slug}${toVertex}`
                console.log(slug)
            }
        })
    }

    // depth first search
    dfs(callback) {
        let readTimer = 0
        const read = []
        const readTimes = []
        const finishedTimes = []
        const predecessors = []
        const adjList = this.adjList
        const readVertices = (vertices, predecessor) => {
            vertices.forEach(key => {
                readTimer++
                if (adjList.get(key).every(v => read.includes(v)) && !finishedTimes[key]) {
                    finishedTimes[key] = readTimer
                }
                if (read.includes(key)) return false
                readTimes[key] = readTimer
                read.push(key)
                if (callback) callback(key)
                predecessors[key] = predecessors[key] || predecessor || null
                if (read.length !== this.vertices.length) {
                    readVertices(adjList.get(key), key)
                }
            })
        }
        readVertices(adjList.keys)
        return { readTimes, finishedTimes, predecessors }
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

console.log(graph.toString())
let res = graph.bfs(graph.vertices[0], v => console.log('Visited vertices:', v))
console.log(res)
graph.distance(graph.vertices[0])
// console.log(graph.adjList)
let _res = graph.dfs(v => console.log(v))

// 输出
/*
A => B C D
B => A E F
C => A D G
D => A C G H
E => B I
F => B
G => C D
H => D
I => E
*/