// For example, if the key to be searched is 15 and linked list is 14->21->11->30->10, then function should return false. 
// If key to be searched is 14, then the function should return true.
// For example, if the key to be searched is 15 and linked list is 14->21->11->30->10, then function should return false. 
// If key to be searched is 14, then the function should return true.

class Node{
    constructor(value){
        this.data = value
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
    search(value){
        let curr = this.head
        while(curr){
            if(curr.data == value){
                return true
            }
            curr = curr.next
        }
        return false
    }
    countNode(){
        let curr = this.head
        let count = 0
        while(curr){
            count++
            curr = curr.next
        }
        return count
    }
    print(){
        let curr = this.head
        let result = ''
        while(curr){
            result+=curr.data+'->'
            curr = curr.next
        }
        console.log(result,'null')
    }
}

const list = new Linkedlist()
list.push(10)
list.push(20)
list.push(30)
console.log(list.search(40))
list.print()
console.log("the length of node",list.countNode());
