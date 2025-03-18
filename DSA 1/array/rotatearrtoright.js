//given an array nums,rotate the array to the right by k steps,where k is non negative
// function rotate(arr,k){
//     const size = arr.length
//      k=k%size
//     const rotate = arr.splice(size-k,k)
//      arr.unshift(...rotate)
//     return arr
// }

// console.log(rotate([3,4,2,5,6,8],5))

//time-->o(n)
//space-->o(n)
function rotate(arr,k){
    let size = arr.length
    k = k%size
    const rotate = arr.splice(size-k,k)
     arr.unshift(...rotate)
    return arr
}
console.log(rotate([2,3,4,5,6],3));

//.............................

// function rotate(arr,k){
// //first we can reverse all
// //[8,6,5,2,4,3]....>>>>>>>>>>>
// //[5,6,8,2,4,3]...>>>>>>>>>>>>>>>>>>>>
// //[5,6,8,3,4,2]................>>>>>
// reverse(arr,0,arr.length-1)
// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)
// return arr
// }
// console.log(rotate([3,4,2,5,6,8],3));

// function reverse(arr,left,right){
//     while(left<right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left++
//         right--
//     }
// }
//........................
function reverse(arr,k){
    reversed(arr,0,arr.length-1)
    reversed(arr,0,k-1)
    reversed(arr,k,arr.length-1)
    return arr
}
function reversed(arr,left,right){
    while(left<right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
}
console.log(reverse([3,4,5,6],3));
