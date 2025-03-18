class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class Linkedlist{
    constructor(){
        this.head = null
    }
    unshift(value){
        const node = new Node(value)
        node.next = this.head
        if(this.head){
            this.head.prev = node
        }
        this.head = node
    }
    push(value){
        const node = new Node(value)
        if(this.head == null){
            this.head = node
        }else{
            let curr = this.head
            while(curr.next!=null){
                curr = curr.next
            }
            curr.next = node
            node.prev= curr
            
        }
    }
    shift(){
        if(this.head == null){
            return
        }
        if(this.head.next == null){
            this.head = null
        }
        this.head = this.head.next
        if(this.head){
            this.head.prev = null
        }
    }
    pop(){
        if(this.head == null){
            return
        }
        if(this.head.next == null){
            this.head = null
            return
        }else{
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
       curr.prev.next = null
        }
  
        
        
    }
    reverse(){
        let curr = this.head
        let temp = null
        while(curr){
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp
            curr = curr.prev
        }
        if(temp!=null){
            this.head = temp.prev
        }
    }
    print(){
        let curr = this.head
             let res = ''
        while(curr){
            res+=curr.data+'<->'
            curr = curr.next
        }
        console.log(res,'null')
    }
}

const list = new Linkedlist()
list.push(30)
list.push(40)
list.push(50)
list.push(60)
list.push(70)

// list.shift()
// list.pop()
console.log("before reversing")
list.print()
console.log("after reversing")
list.reverse()
list.print()