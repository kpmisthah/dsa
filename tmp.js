function quick(arr){
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    if(arr.length<2){
        return arr
    }
    for(let i = 0 ; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
console.log(quick([45,23,12,567,322,34]))