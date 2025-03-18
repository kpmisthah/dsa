class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}
class Linkedlist {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size ==0
    }
    unshift(value){
       const node = new Node(value)   
       node.next = this.head
       this.head = node
       this.size++
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
            //{data:10,next:null}
        }
        this.size++
    }
    shift(){
        this.head = this.head.next
        this.size--
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        if(this.head.next == null){
            this.head = null
        }else{
            let curr = this.head
            let prev = null
            
            while(curr.next){
                prev = curr
                curr = curr.next //null
            }
            prev.next = null
        }
        this.size --
    }
    insert(val,index){
        if(index<0 || index>=this.size){
            return null
        }
        let curr = this.head
        let prev = null
        for(let i = 0 ; i< index;i++){
            prev = curr
            curr = curr.next
        }
        const node = new Node(val)
        node.next = curr
        prev.next = node
    }
    remove(index){
        if(index < 0 || index>=this.size){
            return
        }
        if(index == 0){
            this.shift()
            return 
        }else{
            let curr = this.head
            let prev = null
            for(let i = 0 ; i< index;i++){
                prev = curr
                curr = curr.next
            }
            prev.next = prev.next.next
        }
        this.size--
    }
    removeFromvalue(value){
        if(this.isEmpty()){
            return null
        }
        //checkhead value and removal value is correct
        if(this.head.data== value){
            this.head = this.head.next
            this.size --
            return
        }else{
            // let prev = this.head    
            // while(prev.next && prev.next.data!=value){
            //     prev = prev.next
            // }
            // if(prev.next){
            //     prev.next = prev.next.next
            //     this.size --
            // }
            // //if there is no such value
            // return null
            let curr = this.head
            while(curr.next && curr.next.data != value){
                curr = curr.next
            }
            curr.next = curr.next.next
            return null
        }
    }
    //how to find the node given its value
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.data == value){
                return i 
            }
            curr = curr.next
            i++
        }
        return -1
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
             curr.next = prev
             prev = curr
             curr = next
        }
        this.head = prev
    }
    indexOf(value){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.data == value){
                return i
            }
            i++
            curr = curr.next
        }
        return -1
    }
    print(){
        if(this.isEmpty()){
            console.log("This is empty");
            return null
        }
        let current = this.head;
        let result = ""
        while(current){
            result+=current.data+"->"
            current = current.next;
        }
        console.log(result,"null");
        
    }

}
const list = new Linkedlist()
list.push(12)
list.push(1)
list.push(13)
// list.shift()
// list.pop()
list.insert(23,0)
// list.removeFromvalue(1000)
console.log("before reversing");
console.log("find Index");
console.log(list.indexOf(3));
list.print()
list.reverse()
console.log("After reversing");
list.print()
