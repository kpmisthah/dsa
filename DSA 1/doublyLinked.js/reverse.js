class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}
class Linkedlist{
    constructor(){
        this.head = null
    }
    unshift(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
          this.head.prev = node
         node.next = this.head
        this.head = node
        }
    }
    reverse() {
        let currentNode = this.head
        let prevNode = null
        while(currentNode!=null){
           prevNode = currentNode.prev
           currentNode.prev = currentNode.next
           currentNode.next = prevNode
          currentNode = currentNode.prev
        }
        if(prevNode !=null){
            this.head = prevNode.prev
        }
    }

    print(){
        let curr = this.head
        let res = ""
        while(curr){
            res+=curr.data+'->'
            curr = curr.next
        }
        console.log(res,"null")
    }
}

const list = new Linkedlist()
list.unshift(20)
list.unshift(30)
list.unshift(40)
list.unshift(50)
list.unshift(60)
list.print()
list.reverse()
list.print()