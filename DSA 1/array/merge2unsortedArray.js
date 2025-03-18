//merge two sorted arrays
function merge(arr1,arr2){
    let i = 0 ,j = 0
    let merge = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merge.push(arr1[i++])
        }else{
            merge.push(arr2[j++])
        }
    }
    while(i<arr1.length){
        merge.push(arr1[i++])
    }
    while(j<arr2.length){
        merge.push(arr2[j++])
    }
    return merge
}
console.log(merge([2,3,4,5],[5,6,7,8]))
