// Write a program to remove duplicates in a sorted singly linked list
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
    pop(){
        if(this.isEmpty()){
            return null
        }
        if(this.size ==1){
            this.head = null
        }else{
            let curr = this.head
            let prev = null
            while(curr.next){
               prev = curr
                curr = curr.next
            }
            prev.next = null
        }
    }
    deleteValue(val){
        if(this.isEmpty()){
            return null
        }
        if(this.head.data == val){
            this.head = this.head.next
            this.size--
        }
        let curr = this.head
        while(curr.next && curr.next.data!=val){
            curr = curr.next
        }
        if(curr.next){
            curr.next = curr.next.next
             this.size--
        }
      return null
    }
    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev 
            prev = curr
            curr = next
        }
        this.head = prev
    }
    detectCycle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(slow == fast){
                return true
            }
        }
        return false
    }
    duplicate(){
        let curr = this.head
        while(curr.data == curr.next.data){
            curr.next = curr.next.next
        }
        curr = curr.next
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
list.push(10)
list.push(10)
list.push(20)
list.push(30)
list.duplicate()
list.print()

// list.head.next = list.head
// console.log(list.detectCycle())