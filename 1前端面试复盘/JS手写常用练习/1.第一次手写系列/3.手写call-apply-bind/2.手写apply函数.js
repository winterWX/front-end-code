

Function.prototype.wxApply = function(thisArg,arg){
    var fn = this
    thisArg = !!thisArg ? Object(thisArg) : window
    thisArg.fn = fn
    var value = arg || []
    var result = thisArg.fn(...value) 
    delete thisArg.fn
    return result
}

function foo(...arg){
    console.log('========',this,...arg)
}

console.log(foo.wxApply({name:'11'},[12,23,34]))