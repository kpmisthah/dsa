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
  push(value){
    if(this.head==null){
      this.head = new Node(value)
    }else{
      let newNode = new Node(value)
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = newNode
    }
  }
  
  reverse(head = this.head){
    if(head==null || head.next == null)return head
    let newHead = this.reverse(head.next)
    let front = head.next
    front.next = head
    head.next = null
    return newHead
  }
  
  print(){
    let curr = this.head
    let res = ''
    while(curr){
      res+=curr.data+'->'
      curr=curr.next
    }
    console.log(res,'null')
  }
}

let ll = new Linkedlist()
ll.push(10)
ll.push(20)
ll.push(30)
ll.push(40)
ll.push(50)
ll.print()
ll.head=ll.reverse()
ll.print()
