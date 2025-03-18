function duplicate(arr) {
    // let res = []
    // let freqMap = new Map()
    // for(let num of arr){
    //     freqMap.set(num,(freqMap.get(num)||0)+1)
    // }
    // for(let [num,count] of freqMap){
    //     if(count>1){
    //         res.push(num)
    //     }
    // }
    // return res.length>1?res:[-1]
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
