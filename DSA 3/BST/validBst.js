class Node{
    constructor(k){
        this.key = k
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }
    validBst(node = this.root,min=-Infinity,max=Infinity){
        if(!node)return true
        if(node.key<=min || node.key>=max)return false
        return this.validBst(node.left,min,node.key)&&this.validBst(node.right,node.key,max)
    }
}

let bst = new Bst()
bst.root = new Node(10)
bst.root.left = new Node(8)
bst.root.right = new Node(14)
console.log(bst.validBst())