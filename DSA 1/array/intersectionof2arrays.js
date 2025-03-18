function intersection(arr1,arr2){
    let i = 0 ,j = 0
    let res = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            i++
        }else if(arr2[j]<arr1[i]){
            j++
        }else{
            res.push(arr1[i])
            i++
            j++
        }
    }
    return res
}
console.log(intersection([1,2,3,4,5],[3,4,5,6,78]))
