// -find the first non-repeating character from a string using inbuilt 
// hash table(map)
function occurence(str){
    let map = new Map()
    for(let char of str){
        map.set(char,(map.get(char)||0)+1)
    }
    for(let char of str){
        if(map.get(char)== 1){
            return char
        }
    }
    return -1
}
console.log(occurence("masdlayalam"))