function str(str1,str2){
    let count = {}
    for(let char of str1){
        count[char] = (count[char]||0)+1
    }
    for(let char of str2)[
        count[char] = (count[char]||0)-1
    ]
    for(let key in count){
        if(count[key]!=0){
            return false
        }
    }
    return true
}
console.log(str('master','retsm'));
