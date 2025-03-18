
function str(str){
    let sentence = ''
    let word = ''
    for(let i = 0 ;i<str.length;i++){
        if(str[i] != ' '){
            sentence=str[i]+sentence
        }else{
           word+=sentence+' '
           sentence =''
        }
    }
    word+=sentence
    return word
}
console.log(str('jinan aano gwfigyf'))