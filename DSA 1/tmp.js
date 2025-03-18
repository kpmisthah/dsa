class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Linkedlist{
    constructor(){
        this.head = null
    }
    push(value){
       const node = new Node(value) 
       if(this.head == null){
           node.next = this.head
           this.head = node
       }else{
           const curr = this.head
           while(curr.next){
               curr = curr.next
           }
           curr.next = node
       }
    }
    print(){
        const curr = this.head
        let res = ''
        while(curr){
            res+=curr.data+'->'
        }
        console.log(res,'null')
    }
}

const list = new Linkedlist()
list.push(10)
list.print()
