
function moveNonzero(arr){
    let i = 0
    for(let j = 0 ; j< arr.length ; j++){
        if(arr[j]!=0){
           [arr[i],arr[j]] = [arr[j],arr[i]]
           i++
        }
    }
    return arr
}
console.log(moveNonzero([2,3,0,4,1,0,1,0,3]))



