// 实现slice函数
// slice(0,3) 但是不包含3
Array.prototype.wxSlice = function(start,end){   
    var thisArg = this
    start = start || 0
    end = end || thisArg.length
    var newArray = []
    for(var i = start; i < end; i++){
        newArray.push(thisArg[i])
    }
    return newArray
}
var arr = [1,2,3,4,5,6]
var newArr = arr.wxSlice()
console.log('newArr====',newArr)