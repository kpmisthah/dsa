
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v)=>v!=vertex2)
        }
    }
    
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(let adj of this.adjacencyList[vertex]){
                this.removeEdge(vertex,adj)
            }
            delete this.adjacencyList[vertex]
        }
    }
    
    bfs(start){
        let q = []
        let visited = new Set() 
        visited.add(start)
        q.push(start)
        while(q.length>0){
            let node = q.shift()
            console.log(node)
            for(let neigh of this.adjacencyList[node]){
                if(!visited.has(neigh)){
                visited.add(neigh)
                q.push(neigh)
                }
            }
        }
    }
    
    dfs(start){
        let stack = []
        let visited = new Set()
        visited.add(start)
        stack.push(start)
        while(stack.length>0){
            let node = stack.pop()
            console.log(node)
            for(let adj of this.adjacencyList[node]){
                if(!visited.has(adj)){
                    visited.add(adj)
                    stack.push(adj)
                }
            }
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
            for(let neigh of this.adjacencyList[node]){
                if(!visited.has(neigh)){
                    visited.add(neigh)
                    q.push([...path,neigh])
                }
            }
        }
    }
    
    fullPath(start,end){
        let q = []
        let res = []
        q.push([start])
        while(q.length>0){
            let path = q.shift()
            let node = path[path.length-1]
            if(node==end)res.push(path)
            for(let neigh of this.adjacencyList[node]){
                if(!path.includes(neigh)){
                    q.push([...path,neigh])
                }
            }
        }
        return res
    }
    findCycle(start,visited = new Set(),stack = new Set()){
        if(stack.has(start))return true
        if(visited.has(start))return false
        stack.add(start)
        visited.add(start)
        for(let neigh of this.adjacencyList[start]){
            if(this.findCycle(neigh,visited,stack)){
                return true
            }
        }
        stack.delete(start)
        return false
    }
    display(){
        for(let adj in this.adjacencyList){
            console.log(`${adj}->${this.adjacencyList[adj]}`)
        }
    }
}

let gr = new Graph()
gr.addVertex('A')
gr.addVertex('B')
gr.addVertex('C')
gr.addVertex('D')
gr.addEdges('A','B')
gr.addEdges('B','C')
gr.addEdges('C','D')
gr.addEdges('A','C')
gr.addEdges('D','A')
// gr.removeEdge('A','B')
// gr.removeVertex('A')
// gr.bfs('A')
// gr.display()
// gr.dfs('A')
// console.log("The shorted path to A->D",gr.shortestPath('A','D'))
// console.log('whole path',gr.fullPath('A','D'))
console.log("find cycle",gr.findCycle('A'))
console.log(gr)