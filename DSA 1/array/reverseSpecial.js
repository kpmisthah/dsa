function result(arr){
    let res = []
    for(let word of arr){
    resArr = ''
    for(let i = word.length-1 ; i>=0;i--){
        resArr+=word[i]
    }
    res.push(resArr)
}
return res
}
console.log(result(['hello','world']))