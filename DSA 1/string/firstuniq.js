function string(str){
    let count = {}
    for(let char of str){
       count[char] = (count[char]||0)+1
    }
   for(let char of str){
       if(count[char]==1){
           return char
       }
   }
}
console.log(string('sunasn'))