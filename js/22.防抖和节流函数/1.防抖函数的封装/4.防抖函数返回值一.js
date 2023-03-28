/***
 *  实现：
 *  
 *  实现防抖函数 返回值的做法一
 *  使用回调函数的方式
 * 
*/

function debounce(fn,daley,immediate=false,callbackFn){
    let timer = null
    let isInvoke = false  //首次是否已经执行过的标记
    const _debounce = function(...args){
        // 判断是否立即执行 -- 目的是为了每个阶段的首次都要执行 
        if(immediate && !isInvoke){
            const result = fn.apply(this,args)  //先发一次
            if(callbackFn && typeof callbackFn === 'function'){
                callbackFn(result)
            }
            isInvoke = true  // 表示首次已经执行过了
        }else{
            if(timer){ clearTimeout(timer) }
            timer = setTimeout(()=>{
                const result = fn.apply(this,args) 
                if(callbackFn && typeof callbackFn === 'function'){
                    callbackFn(result)
                }
                isInvoke = false  // 本次阶段已经完成了，恢复初始状态让下个阶段首先继续执行
                timer = null
            },daley)
        }   
    }
    //封装取消功能
    _debounce.cancel = function(){
        console.log('111111')
        // 判断timer是否有值
        if(timer){
            clearTimeout(timer)
            timer = null
            isInvoke = false
        }
    }
    return _debounce
}