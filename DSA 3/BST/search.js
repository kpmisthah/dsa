class Node{
    constructor(val){
        this.value = val
        this.right = null
        this.left = null
    }
}

class Tree{
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
            if(curr.value>value){
                if(!curr.left){
                    curr.left = node
                    return
                }
                curr = curr.left
            }else{
                if(!curr.right){
                    curr.right = node
                    return
                }
                curr = curr.right
            }
        }
    }
    inOrder(node){
        if(!node)return null
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
    search(root,key){
        if(root == null || root.value == key)return root
        if(root.value<key){
            return this.search(root.right,key)
        }
        return this.search(root.left,key)
    }
}

let bt = new Tree()
bt.insert(50)
bt.insert(40)
bt.insert(60)
bt.insert(30)
bt.insert(45)
bt.insert(55)
console.log("Inserted")
bt.inOrder(bt.root)
console.log(bt.search(bt.root,55)!=null?"value is found":'value not found')