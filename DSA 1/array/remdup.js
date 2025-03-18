// function removeDuplicates(arr) {
//     let uniqueArr = []; // Store unique elements

//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;

//         // Check if arr[i] is already in uniqueArr
//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (arr[i] === uniqueArr[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         // If not a duplicate, add to uniqueArr
//         if (!isDuplicate) {
//             uniqueArr.push(arr[i]);
//         }
//     }

//     return uniqueArr;
// }

// // Example Test
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// // Output: [1, 2, 3, 4, 5]
