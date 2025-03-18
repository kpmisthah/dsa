//Linear Search
// given an array of elements n and target element t,find the index of t in the array return -1 if target is not found

// function array(arr,n){
//     for(let i = 0 ; i< arr.length;i++){
//         if(arr[i] == n){
//             return i
//         }
//     }
//     return -1
// }
// console.log(array([4,5,6,7,8],6));

//....................................
//Binary search
//given a sorted array of elements n and target element t,find the index of t in the array return -1 if target is not found
//Binary search only possible on sorted arrays

function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(target == arr[middle]){
            return middle
        }
        if(target<arr[middle]){
            right = middle -1
        }else{
            left = middle+1
        }
    }
    return -1
}
console.log(binarySearch([3,4,5,6,7,8,9,10],5))
//...............................................
//given a sorted array of elements n and target element t,find the index of t in the array return -1 if target is not found
// Recursive Binary search solution

// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let middle = Math.floor((left+right)/2)
//     if(target == arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,left,middle-1)
//     }else{
//         return search(arr,target,middle+1,right)
//     }
// }
// console.log(recursiveBinarySearch([2,3,4,5,6,7],3));

//.............................................
//same problem without helper function

// function recursiveBinarySearch(arr,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let middle = Math.floor((left+right)/2)
//     if(target == arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         return recursiveBinarySearch(arr,target,left,middle-1)
//     }else{
//        return recursiveBinarySearch(arr,target,middle+1,right)
//     }
// }
// let arr = [5,6,7,8,9]
// console.log(recursiveBinarySearch(arr,8,0,arr.length-1));
// User defined class node



