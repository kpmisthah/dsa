//write a function to find max and minimum element of an array

// function maxAndMin(array){
//     let max = -Infinity
//     let min = Infinity
//     for(let i = 0 ; i< array.length;i++){
//         if(array[i]>max){
//             max = array[i]
//         }
//         if(array[i]<min){
//             min = array[i]
//         }
//     }
//     return{min:min,max:max}
// }
// console.log(maxAndMin([1,2,3,4,5,5,67,8]))
//.........................
// function maxAndMin(array){
//     let max = Math.max(...array)
//     let min = Math.min(...array)
//     return{min:min,max:max}
// }
// console.log(maxAndMin([1,2,3,4,5,5,67,8]))