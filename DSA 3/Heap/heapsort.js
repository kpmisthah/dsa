
function heapify(arr,i,n){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    if(left<n && arr[left]>arr[largest]){
        largest = left
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right
    }
    if(largest != i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,largest,n)
    }
}
function heapsort(arr){
    let n = arr.length
    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,i,n)
    }
    for(let i = n-1;i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,0,i)
    }
}
let arr = [5,63,6,1,3,61,45,23]
heapsort(arr)
console.log(arr)
