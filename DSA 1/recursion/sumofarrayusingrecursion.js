
function sum(array,index=0){
    if(index == array.length) return 0
    return array[index]+sum(array,index+1)
}
console.log(sum([1,2,3,4,5,6]));
