function max(arr){
    // let res = arr[0]
    let maxEnding = arr[0]
    for(let i = 1 ; i<arr.length;i++){
        maxEnding = Math.max(maxEnding+arr[i],arr[i])
        // res = Math.max(res,maxEnding)
    }
    return maxEnding
}
console.log(max([4,3,2,4,5,7,8,9,12,32]));
//Time Complexity: O(n), since we are traversing the array only one time.
//Auxiliary Space: O(1)//

//................................................
// JavaScript Program to find the maximum subarray sum using nested loops 

// Function to find the sum of subarray with maximum sum
function maxSubarraySum(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
//.........................................................................
//This return the sub array
function maxSubArr(arr){
    let res = arr[0]
    let start = 0
    let end = 0
    for(let i = 0 ; i<arr.length;i++){
        let currSum = 0
        for(let j = i ; j<arr.length;j++){
            currSum+=arr[j]
            if(currSum>res){
                res = currSum
                start = i
                end = j
            }
        }
    }
    return{max:res,sub:arr.slice(start,end+1)}
}
console.log(maxSubArr([2,3,4,5,2,5,7]))