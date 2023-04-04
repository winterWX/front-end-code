function debounce(fn, delay, immediate = false,callbackFn){
    let timer = null
    let isInvoke = false
    const _debounce = function(arg){
        if(immediate && !isInvoke){
            const result = fn.apply(this,arg)
            callbackFn(result)
            isInvoke = true
        }
        timer && clearTimeout(timer)
        timer = setTimeout(()=>{
            const result = fn.apply(this,arg)
            callbackFn(result)
            isInvoke = false
            timer = null
        },delay)
    }
    _debounce.cancel =function(){
        if(timer){
            clearTimeout(timer)
            timer =null
            isInvoke = false
        }
    }
    return _debounce
}