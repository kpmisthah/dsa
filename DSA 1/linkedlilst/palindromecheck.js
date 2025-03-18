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
    isReverse(head){
        let curr = head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
    palin(){
        let slow = this.head
        let fast = this.head
        while(fast&&fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        let head2 = this.isReverse(slow)
        let first = this.head
        while(head2){
            if(first.data != head2.data){
                return false
            } first = first.next
            head2 = head2.next

        }
        return true
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
list.push(20)
list.push(10)
//  list.push(60)
list.print()
console.log(list.palin())

// list.head.next = list.head
// console.log(list.detectCycle())
