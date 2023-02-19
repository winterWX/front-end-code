    Array.prototype.wxFilter = function(fn) {
        if(typeof fn !== 'function') return
        let res = []
        for(let i = 0 ; i < this.length ; i++) {
            if(fn(this[i])){
                res.push(this[i])
            }
        }
        return res
    }

    var arr = [20,34,5,6,77,89,9]

    var newArray = arr.wxFilter((item,index,arr)=>{
        return  item % 2 === 0
    })
   
    console.log('newArray===',newArray)