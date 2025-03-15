class Node{
    constructor(value){
        this.value = value
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
    
    second(){
        let curr = this.root
        let prev = null
        while(curr.right){
           prev = curr
            curr = curr.right
        }
        if(curr.left){
            curr = curr.left
            while(curr.right){
                curr = curr.right
            }
            return curr.value
        }
        return prev.value
    }
    
}

let bt = new BT()
bt.insert(50)
bt.insert(40)
bt.insert(60)
bt.insert(30)
bt.insert(44)
bt.insert(55)
bt.insert(65)
console.log(bt.second())