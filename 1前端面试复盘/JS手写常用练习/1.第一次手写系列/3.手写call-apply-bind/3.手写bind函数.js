Function.prototype.wxBind = function(thisArg,...arg){
    var fn = this
    thisArg = !!thisArg ? Object(thisArg) : window
    return function(...values){
        thisArg.fn = fn
        var result = thisArg.fn(...[...arg,...values])
        delete thisArg.fn
        return result
    }
}

function foo(...res){
    console.log("====" ,this,...res)
}

const bar = foo.wxBind({name:'wx'},23,45,67,7)
bar('1','2')