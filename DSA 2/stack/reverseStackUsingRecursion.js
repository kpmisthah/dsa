//reverse a stack using recursion

let stack = []
function insertAtBottom(x){
    if(stack.length == 0){
        stack.push(x)
    }else{
        let top = stack.pop()
        insertAtBottom(x)
        stack.push(top)
    }
}

function reverse(){
    if(stack.length>0){
        let top = stack.pop()
        reverse()
        insertAtBottom(top)
    }
}
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
console.log("before",stack)
reverse()
console.log('after',stack)