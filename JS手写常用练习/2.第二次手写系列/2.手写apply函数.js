
/** 手写 apply 函数 */
Function.prototype.wxApply = function(thisArg,arg){
   var fn = this
   thisArg = thisArg !== null ? Object(thisArg) : window
   thisArg.fn = fn
   let result = thisArg.fn(arg) 
   delete thisArg.fn
   return result
}

function fns(arg){ console.log('获取函数绑定的参数',this,arg) }

fns.wxApply({name:'wx',age:20},['11','222'])