
/*** 手写 bind 函数 */
Function.prototype.wxBind = function(thisArg, ...args) {
    // 确定首层 this的调用者 --必须在此处确定
    var fn = this
    thisArg = thisArg !== null ? Object(thisArg) : window
    return function (...rest){
        // 箭头函数会找到上层的this
        thisArg.fn = fn
        let result = thisArg.fn(...args,...rest)
        delete thisArg.fn
        return  result
    }
}  

function fns(...arg){ 
    console.log('获取函数绑定的参数',this,...arg) 
}

const lastBind = fns.wxBind({name:'wx',age:20}, '11','222')
lastBind('33','444')