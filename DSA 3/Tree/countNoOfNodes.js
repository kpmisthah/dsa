class Node{
    constructor(data){
        this.key = data
        this.left = null
        this.right = null
    }
}

function count(root){
    let q = []
    q.push(root)
    let count = 0
    while(q.length>0){
        let node = q.shift()
        count++
        if(node.left)q.push(node.left)
        if(node.right)q.push(node.right)
    }
    return count
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.right = new Node(6)
console.log(count(root))