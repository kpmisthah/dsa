
class Node{
    constructor(data){
        this.data = data
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
    middle(){
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }
    print(){
        let curr = this.head
         let res = ""
        while(curr){
          res+=curr.data+"->"
          curr = curr.next
        }
        console.log(res,'null')
    }
}
const list = new Linkedlist()
list.push(10)
list.push(20)
list.push(30)
list.push(220)
list.push(10)
list.push(40)
//  list.push(60)
list.middle()
list.print()


// list.head.next = list.head
// console.log(list.detectCycle())