 //doubly linked list
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
    prepend(value){
        let node = new Node(value)
        node.next = this.head
        if(this.head){
            this.head.prev= node
        }
        this.head = node
    }
    addLast(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
            return
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            node.prev = curr
            curr.next = node
            
        }
    }
    size(){
        let curr = this.head
        let count = 0
        while(curr){
            curr = curr.next
            count++
        }
        return count
    }
    addAt(data,index){
        // 4 conditions need to be check
        //node.next = curr.next
        //node.prev = curr
        //if ->curr.next = curr.next.prev = node
        //curr,next = node
        if(index<0 || index>this.size()){
            console.error("There is no specified index")
            return
        }
        if(index == 0){
            const node = new Node(data)
            node.next = this.head
            if(this.head){
                this.head.prev = node
            }
            this.head = node
        }else{
            let curr = this.head
            for(let i = 0 ;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next.prev = node
            node.prev = curr
            curr.next = node     
        }
    }
       removeFirst(){
            if(!this.head){
                return
            }
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }
        }
        //curr find cheyth athinte prev edth next null koduthu
    removeLast(){
        if(!this.head){
            return null
        }
        if(this.head.next == null){
            this.head = null
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        if(curr.prev!= null){
            curr.prev.next = null
        }
        
    }
    removeAt(index){
        if(!this.head||index<0 || index>=this.size()){
            console.error("There is no specified index")
        }
        if(index == 0){
            if(!this.head){
                return null
            }
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }
        }
        let curr = this.head
        for(let i = 0 ; i<index;i++){
            curr = curr.next
        }
        if(curr.next){
            curr.next.prev = curr.prev
        }
        if(curr.prev){
            curr.prev.next = curr.next
        }
    }
    print(){
        let current = this.head
        let res = ''
        while(current){
            res+=current.data+'<->'
            current = current.next
        }
        console.log(res,'null')
    }
}
const list = new Linkedlist()
list.prepend(20)
list.addLast(30)
list.addLast(40)
list.addAt(300,2)
// list.removeFirst()
list.removeAt(0)
// list.removeLast()
list.print()


