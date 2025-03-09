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
console.log('Insertion is compelted')
bst.inOrder(bst.root)
