function str(palin,left=0,right=palin.length-1){
    if(left>=right){
        return true
    }
    if(palin[left]!=palin[right]){
        return false
    }
    return str(palin,left+1,right-1)
}
console.log(str('malayalam'))