class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
            return
        }
        let curr = this.root
        while(true){
            if(value<curr.key){
                if(!curr.left){
                    curr.left = node
                    break
                }
                curr = curr.left
            }else{
                if(!curr.right){
                    curr.right = node
                    break
                }
                curr=curr.right
            }
        }
    }
    
    remove(node,value){
        if(!node)return null
        if(value<node.key){
            node.left = this.remove(node.left,value)
        }else if(value>node.key){
            node.right = this.remove(node.right,value)
        }else{
            if(!node.left)return node.right
            if(!node.right)return node.left
            let minSuccessor = this.findMin(node.right)
            node.key = minSuccessor.key
            node.right = this.remove(node.right,minSuccessor.key)
        }
        return node
    }
    
    findMin(node){
        while(node.left){
            node = node.left
        }
        return node
    }
    inOrder(node){
        if(node == null)return
        this.inOrder(node.left)
        console.log(node.key)
        this.inOrder(node.right)
    }
}

let bst = new Bst()
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)
bst.insert(6)
console.log('bst before deletion')
bst.inOrder(bst.root)
console.log('after removal')
bst.remove(bst.root,3)
bst.inOrder(bst.root)