class TrieNode{
    constructor(){
        this.childNode = {}
        this.isWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root
        for(let i = 0 ; i < word.length;i++){
            let letter = word[i]
            if(!node.childNode[letter]){
                node.childNode[letter] = new TrieNode()
            }
            node = node.childNode[letter]
        }
        node.isWord = true
    }
    
    longestPrefix(){
        let current = this.root
        let prefix = ''
        while(Object.keys(current.childNode).length == 1 && !current.isWord){
            let child = Object.keys(current.childNode)[0]
            prefix+=child
            current = current.childNode[child]
        }
        return prefix
    }
}

let trie = new Trie()
let words = ['hello','hell','hellping','hellowin']
words.forEach((word)=>{
    trie.insert(word)
})
console.log('longest prefix',trie.longestPrefix())