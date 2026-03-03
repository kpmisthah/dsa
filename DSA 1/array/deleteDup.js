function duplicate(arr) {
    let res = []
    let freq = {}
    for(let val of arr){
        freq[val] = (freq[val]||0)+1
    }
    for(let key in freq){
        if(freq[key]>1){
            res.push(Number(key))
        }
    }
    return res
}

console.log(duplicate([2,3,4,5,3,2,4,5,6,2,5,3,6,100]));
