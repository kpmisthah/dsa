// function remove(str,x){
//     if(str.length == 0){
//         return ''
//     }
//     if(str[0] == x){
//         return remove(str.substring(1),x)
//     }
//     return str.charAt(0)+remove(str.substring(1),x)
// }
// console.log(remove('geeksforgeeks','e'))
function remove(str,x){
    if(str.length==0){
        return ''
    }
    if(str[0]==x){
        return remove(str.substring(1),x)
    }
    return str.charAt(0)+remove(str.substring(1),x)
}
console.log(remove('geeksforgeeks','e'));
