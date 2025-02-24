// reverse a string using stack
function reverse(str){
    let stack = []
    for(let val of str){
        stack.push(val)
    }
    let rev = ''
while(stack.length>0){
    rev+=stack.pop()
}
    return rev
}
console.log(reverse('mathrubumi o'))-