function arr(arr,i){
    if(i<0 || i>arr.length-1){
        console.log("Invalid position");
        return arr
    }
    arr.splice(i,1)
    return arr
}
console.log(arr([1,2,3,4,5,6],2))