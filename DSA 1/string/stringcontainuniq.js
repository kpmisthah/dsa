function string(str){
    const set = new Set(str).size
    if(set == str.length){
        return true
    }else{
        return false
    }
}
console.log(string('jin'))