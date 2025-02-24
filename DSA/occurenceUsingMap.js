
// -find the occurrence of each character in a string using inbuilt hash table(map)
function occurence(str){
    let map = new Map()
    for(let i = 0 ; i<str.length;i++){
        map.set(str[i],(map.get(str[i])||0)+1)
    }
    return map
}
console.log(occurence('malayalammshisjd'))