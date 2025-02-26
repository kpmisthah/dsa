function reverseWord(str){
    let stack = []
    let res = ''
    for(let i = 0 ; i< str.length;i++){
        if(str[i]!=' '){
            stack.unshift(str[i])
        }else{
                    while(stack.length>0){
            res+=stack.shift()
        }
        res+=' '
        }


    }
            while(stack.length>0){
            res+=stack.shift()
        }
    return res
}
let str = 'geeks for geeks'
console.log(reverseWord(str))