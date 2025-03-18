//remove duplicates from sorted arrays
// function remove(arr){
//     for(let i = 0 ; i< arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1)
//                   j--
//             }
          
//         }
//     }
//     return arr
// }
// console.log(remove([2,2,3,4,4,5,6,7,8]))
//time complexity - o(n^2)
//.......................................
// function remove(arr){
//     for(let i = 0 ; i<arr.length-1;i++){
//         if(arr[i] == arr[i+1]){
//             arr.splice(i,1)
//             i--
//         }
//     }
//     return arr.length
// }
// console.log(remove([2,3,4,5,5,6,64,120]));
//here time complexity O(n)
//................................
// function remove(nums){
//     let i =0
//     for(let j = 1 ; j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//             i++
//            nums[i] = nums[j]
//         }
//     }
//     return nums.slice(0,i+1)
// }                   
//  console.log(remove([2,3,4,4,6]));
function remove(arr){
    let i =0
    for(let j =1 ; j<arr.length-1;j++){
        if(arr[i]!=arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return arr.slice(0,i+1)
}
console.log(remove([23,34,45,45,34,23,12]));
