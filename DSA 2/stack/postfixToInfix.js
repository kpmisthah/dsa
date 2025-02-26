function isOperator(x){
    return (x>='a'&& x<='z')||(x>='A'&&x<='Z')
}
function convert(str){
    let stack = []
    for(let i = 0 ; i < str.length ; i++){
        let c = str[i]
        if(isOperator(c)){
             stack.push(c+'')
        }else{
            let op1 = stack[stack.length-1]
            stack.pop()
            let op2 = stack[stack.length-1]
            stack.pop()
            let temp = '('+op2+c+op1+')'
            stack.push(temp)
        }
    }
    return stack[stack.length-1]
}
let str = "ab*c+";
console.log(convert(str))
