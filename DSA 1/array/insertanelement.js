//  Insert an Element: Write a function to insert an element at a specific position in an array

// function arr(arr,i,num){
//     arr.splice(i,0,num)
//     return arr
// }
// console.log(arr([1,2,3,4,5,6],2,3))
//................................................
//without splice
// function arr(arr,pos,num){
//     let size = arr.length

//     for(let i = size ; i>pos;i--){
//         arr[i] = arr[i-1]
//     }
//     arr[pos] = num
//     return arr
// }
// console.log(arr([1,2,3,4,5,6],2,8))

