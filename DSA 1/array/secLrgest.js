// //find the sec largest number
// function secLargest(arr){
//     //[10,10] handle this case
//     const set = Array.from(new Set(arr))
//     const sort = set.sort((a,b)=>b-a)
//     if(sort.length>=2){
//         return sort[1]
//     }else{
//         return -1
//     }
// }
// console.log(secLargest([34,22,123]));
//this is time complexity o(nlogn)
//......................
// function thirdLargest (arr){
//     let largest = -Infinity
//     let secLargest = -Infinity
//     let third = -Infinity
//     for(let i = 0 ; i<arr.length;i++){
//         if(arr[i]>largest){
//             third = secLargest
//             secLargest = largest
//             largest = arr[i]
//         }else if(arr[i]!=largest&& arr[i]>secLargest){
//             third = secLargest
//             secLargest = arr[i]
//         }else if(arr[i]!=largest && arr[i]!=secLargest && arr[i]>third){
//             third = arr[i]
//         }
//     }
//     return third
// }
// console.log(thirdLargest([4,3,5,2,5,6,78,45]))

//time complexity - o(n)

//.....................................

function reduce(array){
    const sec = array.reduce((acc,curr)=>{
        if(curr.largest<curr){
            curr.secLargest = curr.largest
            curr.largest = curr.secLargest
        }else if(curr.secLargest!=largest && curr.secLargest>array[i]){
            curr.secLargest = array[i]
        }
    },{largest:-Infinity,secLargest:-Infinity})
    return sec
}
console.log(reduce([1,2,3,5,4,32,12,46]));
