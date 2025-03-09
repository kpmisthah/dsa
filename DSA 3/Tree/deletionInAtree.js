class Node{
    constructor(v){
        this.key = v
        this.left = null
        this.right = null
    }
}
function deleteDeepest(root,curr){
    let q = []
    q.push(root)
    while(q.length!=0){
        let node = q.shift()
        if(node.left){
            if(node.left == curr){
                return node.left = null
            }else{
                q.push(node.left)
            }
        }
        if(node.right){
            if(node.right == curr){
                return node.right = null
            }else{
                q.push(node.right)
            }
        }
    }
}
function deletion(root,key){
    if(!root)return null
    if(root.left == null && root.right == null){
        if(root.key == key)return null
    }
    let curr = null
    let keyNode = null
    let q = []
    q.push(root)
    while(q.length!=0){
        curr = q.shift()
        if(curr.key == key){
            keyNode = curr
        }
        if(curr.left)q.push(curr.left)
        if(curr.right)q.push(curr.right)
    }
    if(keyNode!=null){
        let x = curr.key
        keyNode.key = x
        deleteDeepest(root,curr)
    }
    return root
}

function inOrder(node){
    if(node == null)return
    inOrder(node.left)
    console.log(node.key)
    inOrder(node.right)
}


let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)
console.log("Before deletion")
inOrder(root)
let key = 5
root = deletion(root,key)
console.log('after deletion')
inOrder(root)