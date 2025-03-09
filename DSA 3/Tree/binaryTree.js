class Node{
    constructor(val){
        this.value = val
        this.right = null
        this.left = null
    }
}

class BT{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
            return
        }
        let q = [this.root]
        while(q.length){
            let curr = q.shift()
            if(!curr.left){
                curr.left = node
                return
            }
            if(!curr.right){
                curr.right = node
                return
            }
            q.push(curr.left)
             q.push(curr.right)
        }
    }
    inOrder(node,result=[]){
        if(node == null)return result
        this.inOrder(node.left,result)
        result.push(node.value)
        this.inOrder(node.right,result)
        return result
    }
}

let bt = new BT()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
console.log('rfds',bt.inOrder(bt.root))