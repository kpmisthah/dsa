function findDup(array){
    const set = new Set(array)
    return [...set]
}
console.log(findDup([1,2,2,3,4,5,6,7,7,8]))