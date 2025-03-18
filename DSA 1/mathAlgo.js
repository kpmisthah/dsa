//fibonacci sequence

//in mathematics Febonacci sequence is a sequence in which each number is the sum of two preceding ones
//The first 2 number in this sequence are 0 and 1
//fibonacci(2) - [0,1]
//fibonacci(3) - [0,1,1]
//fibonacci(7) - [0,1,1,2,3,5,8]

//1)give a number 'n', find the first 'n' elements of a Fibonacci sequence

// function fibonacci(n){
//     let fib = [0,1]
//     for(let i =2;i<n;i++){
//         fib[i] = fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(3));
//............................................
//2)given an integer n find the factorial of that integer

// function factorial(n){
//     let sum = 1
//     for(let i = 2 ; i<=n;i++){
//         sum*=i
//     }
//     return sum
// }
// console.log( factorial(6));
//..........................

//3) Given a natural number n ,determine if the number is prime or not
// function prime(n){
//     if(n<2){
//         return false
//     }
//     for(let i =2 ; i<n;i++){
//         if(n%i == 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(9));
//....................................................
// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!=0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }
// console.log(isPowerOfTwo(8));
//.......................................................
//Recursive febonacci sequence 
//1)find nth element of a febonacci sequence
// function recursion(n){
//     if(n<2){
//         return n
//     }
//     return recursion(n-1)+recursion(n-2)
// }
// console.log(recursion(6));
//..........................................................
//print fibonacci
function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
n = 6
for(let i = 0 ;i<n;i++){
    console.log(fibonacci(i));
    
}

//.............................................
//2) FInd the factorial of given n
// function factorial(n){
//     if(n== 0) {
//         return 1
//     }
//     return (n*factorial(n-1))
// }
// console.log( factorial(6));
//...............................