//  parenthesis checking using stack
function stackArray(str){
    let stack = []
    for(let i = 0 ; i< str.length ;i++){
            let lastOpen = stack[stack.length-1]
        if(str[i] == '{' || str[i] == '[' ||str[i] == '('){
            stack.push(str[i])
        }else if(str[i] == ')'&& lastOpen == '('||str[i] == ']'&& lastOpen == '[' || str[i] == '}'&& lastOpen == '{'){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length == 0
}
let str = '{[()]}'
console.log(stackArray(str))
