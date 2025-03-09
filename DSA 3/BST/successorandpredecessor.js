class Node{
    constructor(v){
        this.value = v
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
            if(value<curr.value){
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
    
    successor(root,key){
        let succ = null
        let curr = this.root
        //key smallest aan so left l aakumundaka
        if(key<curr.value){
            succ = curr.value
            curr = curr.left
        }else if(key>curr.value){
            curr = curr.right
        }else{
            if(curr.right){
                return this.findMin(curr.right)
            }
        }
    }
    predecessor(root,key){
        let pred = null
        let curr = root.value
        if(key>curr.value){
            pred = curr.value
            curr = curr.right
        }else if(key<curr.value){
            curr = curr.left
        }else{
            if(curr.left){
                return this.findMax(curr.left)
            }
        }
    }
    
    
    findMin(node){
        while(node.left){
            node = node.left
        }
        return node
    }
    findMax(node){
        while(node.right){
            node = node.right
        }
        return node
    }
}

let bst = new Bst()
bst.insert(50)
bst.insert(40)
bst.insert(60)
bst.insert(30)
bst.insert(45)
console.log(bst.successor(bst.root,40))
console.log(bst.predecessor(bst.root,40))