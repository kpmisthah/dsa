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
        for(let i = 0 ; i < word.length ; i ++){
            let letter = word[i]
            if(!node.childNode[letter]){
                node.childNode[letter] = new TrieNode()
            }
            node = node.childNode[letter]
        }
        node.isWord = true
    }
    
    suggestionHelper(node,list,curr){
        if(node.isWord){
            list.push(curr)
        }
        for(let child in node.childNode){
            this.suggestionHelper(node.childNode[child],list,curr+child)
        }
    }
    
    suggestion(prefix){
        let node = this.root
        let curr = ''
        for(let i = 0 ; i < prefix.length;i++){
            if(!node.childNode[prefix[i]]){
                return []
            }
            curr+=prefix[i]
            node = node.childNode[prefix[i]]
        }
        let list = []
        this.suggestionHelper(node,list,curr)
        return list
    }
}
let trie = new Trie()
let words = ['hello','help','helping','keep','keeping','need','hello word']
words.forEach((word)=>{
    trie.insert(word)
})
console.log('suggestion',trie.suggestion('dcsd'))