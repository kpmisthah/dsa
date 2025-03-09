class TrieNode{
    constructor(){
        this.childNode = new Array(26).fill(null)
        this.wordCound = 0
    }
}

function insertion(root,key){
    let currentNode = root
    for(let i = 0 ; i < key.length ; i ++){
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0)
           if(currentNode.childNode[index] == null){
               currentNode.childNode[index] = new TrieNode()
           }
           currentNode = currentNode.childNode[index]
    }
    currentNode.wordCound++
}

function searchPrefix(root,prefix){
    let currentNode = root
    for(let i = 0 ; i < prefix.length ; i ++){
        let index = prefix[i].charCodeAt(0)-'a'.charCodeAt(0)
        if(currentNode.childNode[index]==null){
            return false
        }
        currentNode = currentNode.childNode[index]
    }
    return true
}


let root = new TrieNode()
insertion(root,'cat')
insertion(root,'can')
insertion(root,'butterfly')
console.log('insertion is completed')
console.log(searchPrefix(root,'zx'))
