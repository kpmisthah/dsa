//find nth node from the end of linked list
class Node{
    constructor(val){
        this.data = val
        this.next = null 
    }
}
class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    removeNthNode(n){
        let counter = 1
        let slow = this.head 
        let fast = this.head
        let prev = null
        while(counter<n){
            fast = fast.next
            counter++
        }
        while(fast.next != null){
            prev = slow
            slow = slow.next
            fast = fast.next
        }
        if(prev == null){
            this.head = this.head.next
        }else{
             prev.next = prev.next.next
        }
     
    }
    print(){
        let curr = this.head
        let res = ''
        while(curr){
            res+=curr.data+"->"
            curr = curr.next
        }
        console.log(res,"null")
    }
}
const list = new Linkedlist()
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.removeNthNode(4)
list.print()




