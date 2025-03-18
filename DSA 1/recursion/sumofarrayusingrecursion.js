// function sum(array){
//     if(array.length<1){
//         return 0
//     }
//     return array.pop()+sum(array)
// }

// console.log(sum([2,3,4,5,6,7]))

function sum(array,index=0){
    if(index == array.length) return 0
    return array[index]+sum(array,index+1)
}
console.log(sum([1,2,3,4,5,6]));
