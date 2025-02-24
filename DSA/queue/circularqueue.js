//circular queue
// class Myqueue{
//     constructor(c){
//         this.arr = new Array(c).fill(null)
//         this.capacity = c
//         this.size = 0
//         this.front = 0
//     }
//     getFront(){
//         if(this.size == 0) return null
//         return this.arr[this.front]
//     }
//     getRear(){
//         if(this.size == 0) return null
//         let rear = (this.front+this.size-1)%this.capacity
//         return this.arr[rear]
//     }
//     enqueue(x){
//         if(this.capacity == this.size) return null
//         let rear = (this.front+this.size)%this.capacity
//          this.arr[rear] = x
//         this.size++
//     }
//     dequeue(){
//         if(this.size == 0)return null
//         let res = this.arr[this.front]
//         this.front = (this.front+1)%this.capacity
//         this.size--
//            return res
//     }
// }

// let q = new Myqueue(5)
// q.enqueue(10)
// console.log(q.getFront(),q.getRear())
// q.enqueue(20)
// console.log(q.getFront(),q.getRear())
// q.enqueue(30)
// console.log(q.getFront(),q.getRear())
// q.enqueue(40)
// console.log(q.getFront(),q.getRear())
// q.enqueue(50)
// console.log(q.getFront(),q.getRear())
// q.dequeue()
// q.enqueue(60)
// console.log(q.getFront(),q.getRear())
class Myqueue{
    constructor(c){
        this.arr = new Array(c)
        this.front = 0
        this.size = 0
        this.capacity = c
    }
    getFront(){
        if(this.size == 0)return
        return this.arr[this.front]
    }
    getRear(){
        if(this.size == 0) return
        let rear = (this.front+this.size-1)%this.capacity
        return this.arr[rear]
    }
    enqueue(x){
        if(this.capacity==this.size) return null
        let rear = (this.front+this.size)%this.capacity
        this.arr[rear] = x
        this.size++
    }
    dequeue(){
        if(this.size==0)return null
        this.front = (this.front+1)%this.capacity
        this.size --
    }
}
let q = new Myqueue(4)
q.enqueue(20)
console.log(q.getFront(),q.getRear());
q.enqueue(30)
console.log(q.getFront(),q.getRear());
q.enqueue(40)
console.log(q.getFront(),q.getRear());
q.enqueue(50)
console.log(q.getFront(),q.getRear());
q.dequeue()
q.enqueue(60)
console.log(q.getFront(),q.getRear());