class DoubleHashTable{
    constructor(size){
        this.table = new Array(size).fill(null)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    hash2(key){
        let prime = 7
        let total = 0
        for(let i = 0 ; i<key.length ; i++){
            total+=key.charCodeAt(i)
        }
    return prime -(total%prime)
    }
    set(key,value){
        let index = this.hash(key)
        let step = this.hash2(key)
        let i = 0
        while(this.table[index]!= null && this.table[index]!="DELETED"&&this.table[index][0]!=key){
            index = (index+i*step)%this.size
            i++
        }
        this.table[index] = [key,value]
    }
    get(key){
        let index = this.hash(key)
        let step = this.hash2(key)
        let i =0
        while(this.table!=null){
            if(this.table[index]!='DELETED'&&this.table[index][0] == key){
                return this.table[index][1]
            }
            index = (index+i*step)%this.size
            i++
        }
    }
    remove(key){
        let i = 0
        let index = this.hash(key)
        let step = this.hash2(key)
        while(this.table[index]!=null){
            if(this.table[index]!='DELETED' && this.table[index][0] == key){
                this.table[index] = 'DELETED'
            }
            index = (index+i*step)%this.size
            i++
        }
    }
    display(){
        console.log(this.table)
    }
}

let ls = new DoubleHashTable(30)
ls.set('name','misthah')
ls.set('age','19')
ls.display()
