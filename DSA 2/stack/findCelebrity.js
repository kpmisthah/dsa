// Given a square matrix mat[][] of size n x n, such that mat[i][j] = 1 means ith person knows jth person, the task is to find the celebrity.
//  A celebrity is a person who is known to all but does not know anyone. Return the index of the celebrity, if there is no celebrity return -1.
// Note: Follow 0-based indexing and mat[i][i] will always be 1.
function celebrity(mat){
    let n = mat.length
    let stack = []
    for(let i = 0 ; i < n ; i ++){
        stack.push(i)
    }
    while(stack.length>1){
    let a = stack.pop() //2
    let b = stack.pop() //1
    if(mat[a][b]!=0){
        stack.push(b)
    }else{
        stack.push(a)
    }
    
}
let c = stack.pop()
for(let i = 0 ; i < n ; i++){
    if(i!=c){
        if(mat[i][c] == 0 || mat[c][i]!==0) return -1
    }
}
return c
}

let mat = [
    [0,0,0],
    [0,1,0],
    [0,1,0]
    ]
console.log(celebrity(mat))