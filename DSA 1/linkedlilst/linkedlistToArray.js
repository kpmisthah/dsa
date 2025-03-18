class Node {
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
        return this.size==0
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
    toArray(){
        let arr = []
        let curr = this.head    
        while(curr){
            arr.push(curr.data)
            curr = curr.next
        }
        return arr
    }
    print(){
        let curr = this.head
        let result = ""
        while(curr){
            result+=curr.data+"->"
            curr = curr.next
        }
        console.log(result,"null");
        
    }
}
const list = new Linkedlist()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.print()
console.log(list.toArray());


