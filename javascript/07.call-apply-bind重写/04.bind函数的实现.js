Function.prototype.wxBind = function(thisArg,...argArray){
    var fn = this  // 此时this就是调用者函数
    thisArg = !!thisArg ? Object(thisArg) : window
    return function(...arg){
        thisArg.fn = fn
        var finalArg = [...argArray,...arg]  // 合并参数
        var result = thisArg.fn(...finalArg)
        delete thisArg.fn
        return result
    }
}
function sum(...num){
    console.log(this,...num)
}

var bar = sum.wxBind('ab',1,2,3)
bar(4,5)




// function foo(...argArray){
//    console.log('argArray',...argArray)  //  10，20，30，40
// }
// // 会将参数拼接起来
// var fo1 = foo.bind('abc',10,20)
// fo1(30,40)