let str = ['hello', 'world'];

for(let i = 0 ; i<str.length;i++){
    let reverse = ''
    for(let j = str[i].length-1;j>=0;j--){
        reverse+=str[i][j]
    }
    str[i] = reverse
}

console.log(str);
