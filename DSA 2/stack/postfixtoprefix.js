function isOperator(c){
    switch(c){
        case '+':
        case "-":
        case '/':
        case '*':
        case '^':
        case '%':
        return true
    }
    return false
}
function convert(str){
    let l = str.length
    let stack = []
    for(let i = 0 ; i < l ; i++){
        let c = str[i]
        if(isOperator(c)){
            let op1 = stack[stack.length-1]
            stack.pop()
            let op2 = stack[stack.length-1]
            stack.pop()
            let temp = c+op2+op1
            stack.push(temp)
        }else{
            stack.push(c+'')
        }
    }
    return stack[stack.length-1]
}
let expr = "ABC/-AK/L-*"
console.log(convert(expr))


