/*** 手写 call */

Function.prototype.wxCall = function (thisArg,...args){
    var fn = this  // 调用者
    thisArg = thisArg !== null ? Object(thisArg) : window  // 保证传的是一个对象
    thisArg.fn = fn
    const result = thisArg.fn(...args)
    delete thisArg.fn
    return result
}

function fns(...arg){ console.log('获取函数绑定的参数',this,...arg) }

fns.wxCall({name:'wx',age:20},'11','222')