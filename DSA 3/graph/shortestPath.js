class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertix(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertix(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertix(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
         this.adjacencyList[vertex2].push(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].includes(vertex2)&&this.adjacencyList[vertex2].includes(vertex1)
            )
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=>v!=vertex2)
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=>v!=vertex1)
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
           for(let adjacentVertex of this.adjacencyList[vertex]){
               this.removeEdge(vertex,adjacentVertex)
           }q.push
           delete this.adjacencyList[vertex]
        }
    }
    
    shortestPath(start,end){
        let q = []
        let visited = new Set()
        visited.add(start)
        q.push([start])
        while(q.length>0){
            let path = q.shift()
            let node = path[path.length-1]
            if(node == end){
                return path
            }
            for(let neighbour of this.adjacencyList[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    q.push([...path,neighbour])
                }
            }
        }
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex}->${this.adjacencyList[vertex]}`)
        }
    }
}

let graph = new Graph()
graph.addVertix('A')
graph.addVertix('B')
graph.addVertix('C')
graph.addVertix('D')
graph.addEdges('A','B')
graph.addEdges('B','C')
graph.addEdges('C','D')
graph.addEdges('A','C')
graph.display()
console.log('find shortest path',graph.shortestPath('A','D'))
