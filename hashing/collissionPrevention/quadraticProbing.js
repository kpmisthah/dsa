class QuadraticProbing{
    constructor(size){
        this.size = size
        this.table = new Array(size).fill(null)
    }
    hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]!=null && this.table[index]!='DELETED' && this.table[index][0]!=key){
            index = (index+i*i)%this.size
            i++
        }
        this.table[index] = [key,value]
    }
    get(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]!=null){
            if(this.table[index][0] == key && this.table[index]!='DELETED') return this.table[index][1] 
                    index = (index+i*i)%this.size
        i++
        }

        return undefined
    }
    remove(key){
        let index = this.hash(key)
        let i = 1
        while(this.table[index]!=null){
            if(this.table[index]!='DELETED' && this.table[index][0] == key){
                this.table[index] = 'DELETED'
                return
            }
            index = (index+i*i)%this.size
            i++
        }
    }
    display(){
        console.log(this.table)
    }
}
let hash = new QuadraticProbing(10)
hash.set("akhil","shamil")
hash.set("likha","shamil")
hash.set("khila","shamil")
hash.set("hkila","shamil")
hash.display()