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
    closestValue(target){
        let closest = this.root.value
        let curr = this.root
        while(curr){
            if(Math.abs(curr.value-target)<Math.abs(closest-target)){
                closest = curr.value
            }
            if(target<curr.value){
                curr = curr.left
            }else if(target>curr.value){
                curr = curr.right
            }else{
                return curr.value
            }
        }
        return closest
    }
}

let bst = new Bst()
bst.insert(50)
bst.insert(40)
bst.insert(60)
bst.insert(30)
bst.insert(45)
console.log('inserted');
console.log(bst.closestValue(42))
