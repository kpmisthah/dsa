class Node{
    constructor(val){
        this.key = val
        this.left = null
        this.right = null
    }
}

class BT{
    constructor(){
        this.root = null
    }
    insert(value){
         let newNode = new Node(value)
        if(!this.root){
        this.root = newNode
        return
    }
    let q = [this.root]
    while(q.length>0){
       
        let curr = q.shift()
        if(!curr.left){
            curr.left = newNode
            return
        }
        if(!curr.right){
            curr.right = newNode
            return
        }
        q.push(curr.left)
        q.push(curr.right)
    }
}

depth(root,targetValue,current = 0){
    if(!root) return -1
    if(root.key == targetValue)return current
    let leftDepth = this.depth(root.left,targetValue,current+1)
    if(leftDepth!=-1){
        return leftDepth
    }
    let rightDepth = this.depth(root.right,targetValue,current+1)
    return rightDepth
}

}

let bt = new BT()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
console.log("insertion is compelted")
console.log(bt.depth(bt.root,4))