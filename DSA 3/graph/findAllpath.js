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
           }
           delete this.adjacencyList[vertex]
        }
    }
    findAllPath(start,end){
        let q = []
        q.push([start])
        let result = []
        while(q.length>0){
            let path = q.shift()
            let node = path[path.length-1]
            if(node == end)result.push(path)
            for(let neighbour of this.adjacencyList[node]){
                if(!path.includes(neighbour)){
                    q.push([...path,neighbour])
                }
            }
        }
        return result
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
console.log('find All path',graph.findAllPath('A','D'))
