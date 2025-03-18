// function checkPalin(str){
//     let left = 0;
//     let right = str.length-1
//     let isPalin = true
//     while(left<right){
//         if(str[left]!=str[right]){
//             isPalin = false
//         }
//         left++
//         right--
//     }
//     if(isPalin){
//         return "its a palindrome"
//     }else{
//         return "not a palindrome"
//     }
// }
// console.log(checkPalin('viviv'))
// // l = 0 r = 8

//....................................................................
//check is a function is palindrome using recursive function
//base condition str.length ==1 return true
//""""""""""""""str.length == 2 str[0]==str[1]
//then give a condtion if first and last letter equal slice(1,-1) using recursive call
// function palin(str){
//     if(str.length ==1) return true
//     if(str.length == 2) return str[0] == str[1]
//     if(str[0] == str.slice(-1)){
//         return palin(str.slice(1,-1))
//     }
//     return false
// }
// console.log(palin('malayala'))
//..................................
