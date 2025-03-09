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
        for(let i = 0 ; i<word.length;i++){
            let letter = word[i]
            if(!node.childNode[letter]){
                node.childNode[letter] = new TrieNode()
            }
            node = node.childNode[letter]
        }
        node.isWord = true
    }
    count(node){
        let counter = 0
        if(node.isWord){
            counter++
        }
        for(let child in node.childNode){
            counter+=this.count(node.childNode[child])
        }
        return counter
    }
    countPrefix(prefix){
        let node = this.root
        for(let i = 0 ; i < prefix.length;i++){
            if(!node.childNode[prefix[i]]){
                return 0
            }
            node = node.childNode[prefix[i]]
        }
        return this.count(node)
        
    }
}

let trie = new Trie()
let words = ['hello','help','helping','hellowin','helwa','keeping','listneing']
words.forEach((word)=>{
    trie.insert(word)
})
console.log('count prefix',trie.countPrefix('hel'))