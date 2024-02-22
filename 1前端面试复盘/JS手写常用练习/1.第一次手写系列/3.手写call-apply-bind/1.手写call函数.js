Function.prototype.wxCall = function(thisArg,...arg){
    var fn = this
    thisArg = !!thisArg ? Object(thisArg) : window
    thisArg.fn = fn
    var result = thisArg.fn(...arg)
    delete thisArg.fn
    return result
}

function foo(...arg){
   console.log('======', this, ...arg)
}

foo.wxCall({},12,34)