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
graph.addEdges('A','B')
graph.addEdges('B','C')
console.log(graph.hasEdge('B','A'))
graph.removeVertex('B')
// graph.removeEdge('A','B')
graph.display()
