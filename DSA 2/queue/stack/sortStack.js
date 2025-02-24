
// // -sort a stack
// let t = -1
// let max = 1000
// let arr = Array(max)
// function push(x){
//     if(t>max){
//         console.log("The stack is full")
//     }
//     t+=1
//     arr[t] = x
// }
// function pop(){
//     if(t<0){
//         console.log("The stack is empty")
//         return null
//     }
//     let x = arr[t]
//     t-=1
//     return x
// }
// function display(){
//     for(let i = t ; i>-1;i--){
//         console.log(arr[i])
//     }
// }
// function sortStack(){
//     let tempStack = []
   
//     while(t>=0){
//          let temp = pop()
//         while(tempStack.length>0 && tempStack[tempStack.length-1]>temp){
//             push(tempStack.pop())
//         }
//         tempStack.push(temp)
//     }
//     while(tempStack.length>0){
//         push(tempStack.pop())
//     }
// }

// push(20)
// push(50)
// push(30)
// display()
// console.log("After sorting")
// sortStack()
// display()
function sortedStack(stack){
    let sort = []
    while(stack.length>0){
    let temp = stack.pop()
    while(sort.length>0 && sort[sort.length-1]>temp){
        stack.push(sort.pop())
    }
    sort.push(temp)
}
    while(sort.length>0){
        stack.push(sort.pop())
    }
}
let stack = [3,4,6,5,21,2,123]
sortedStack(stack)
console.log(stack);

