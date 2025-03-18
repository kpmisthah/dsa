let arr = [2,34,5,6,122,23,54]
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
    arrToLl(arr){
        if(arr.length==0)return
        this.head = new Node(arr[0])
        let curr = this.head
        for(let i = 1 ; i <arr.length;i++){
            curr.next = new Node(arr[i])
            curr = curr.next
        }
    }
    
    print(){
        let res = ''
        let curr = this.head
        while(curr){
            res+=curr.data+'->'
            curr = curr.next
        }
        console.log(res,'null')
    }
}

let ll = new Linkedlist()
ll.arrToLl(arr)
ll.print()
