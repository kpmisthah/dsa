class LinearProbing{
    constructor(size){
        this.size = size
        this.table = new Array(size).fill(null)
    }
    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i ++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]!=null && this.table[index][0]!=key &&  this.table[index] !== "DELETED" ){
            index = (index+1)%this.size
            if(index == startIndex) return
        }
        this.table[index] = [key,value]
    }
    get(key){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]!=null){
            if(this.table[index][0] == key && this.table[index]!='DELETED') return this.table[index][1]
            index = (index+1)%this.size
            if(index == startIndex) return null
        }
        return null
    }
    remove(key){
        let index = this.hash(key)
        let startIndex = index
        while(this.table[index]!=null){
            if(this.table[index]!='DELETED' && this.table[index][0] == key){
                this.table[index] = 'DELETED'
                return
            }
            index = (index+1)%this.size
            if(index == startIndex)return
        }
    }
    display(){
        console.log(this.table)
    }
}
let ln = new LinearProbing(5)
ln.set('name','Misthah')
ln.set('mane','sinan')
ln.remove('mane')
ln.display()