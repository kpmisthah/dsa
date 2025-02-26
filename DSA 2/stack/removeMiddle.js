//remove middle element using stack
function deleteMiddle(stack,currIndex,size){
    if(currIndex == size) return
    let top = stack.pop()
    deleteMiddle(stack,currIndex+1,size)
    if(currIndex!=Math.floor((size/2))){
        stack.push(top)
    }
}
function removeElem(stack){
    let size = stack.length
    deleteMiddle(stack,0,size)
}
let stack = [67,34,6776,1222,34,12,67]
console.log(stack)
removeElem(stack)
console.log('after',stack)

