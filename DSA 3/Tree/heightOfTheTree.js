class Node{
    constructor(data){
        this.key = data
        this.left = null
        this.right = null
    }
}

function height(root){
  if(!root)return 0
  let lHeight = height(root.left)
  let rHeight = height(root.right)
  return 1+Math.max(lHeight,rHeight)
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.right = new Node(6)
console.log(height(root))