class TrieNode{
    constructor(){
        this.childNode = new Array(26).fill(null)
        this.wordCount = 0
    }
}

    function insert(root,key){
        let curr = root
        for(let i = 0 ; i < key.length; i++){
            let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0)
            if(curr.childNode[index] == null){
                curr.childNode[index] = new TrieNode()
            }
            curr = curr.childNode[index]
        }
        curr.wordCount++
    }
  

function searchWord(root,key){
    let curr = root
    for(let i = 0; i<key.length;i++){
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if(curr.childNode[index] == null){
            return false
        }
        curr = curr.childNode[index]
    }
    return curr.wordCount>0
}

let root = new TrieNode()
insert(root,'cat')
insert(root,'bat')
insert(root,'ball')
console.log("insertion is completed")
console.log(searchWord(root,'cat'))