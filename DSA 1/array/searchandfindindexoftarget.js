// Search for an Element: Write a function to find an element in an array and return its index.
//1 way
// function search(array,target){
//     return array.indexOf(target)
// }
//..............................
//2nd way
// function search(array,target){
//     return array.findIndex((num)=>num==target)
// }
//...........................
//linear search
//  function search(array,target){
//      for(let i = 0 ; i<array.length;i++){
//          if(array[i] == target ){
//              return i
//          }
//      }
//  }
// console.log(search([1,2,3,4,5,6,7],4))