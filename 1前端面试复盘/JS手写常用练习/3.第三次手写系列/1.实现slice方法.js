Array.prototype.wxSlice = function(start,end){
    var thisArg = this
    if(!Array.isArray(thisArg)) return
    start = start || 0
    end = end || thisArg.length
    var result = []
    for(let i = start; i < end ; i++){
        result.push(thisArg[i])
    }
    return result
}
