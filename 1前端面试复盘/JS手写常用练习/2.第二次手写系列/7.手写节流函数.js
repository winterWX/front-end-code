function throttle(fn,interval,option){
    let { leading = false,  trailing } = option
    let firstTime = 0
    let timer = null
    const _throttle = function(){
        let nowTime = new Date().getTime()
        // 如果leading == false 设置为不执行
        if(firstTime == 0 && !leading){
            firstTime = nowTime
        }
        let remainTime = interval - (nowTime - firstTime)
        if(remainTime <= 0){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            fn()
            firstTime = nowTime // 重新初始开始时间
            return 
        }
        if(!timer && trailing){
            timer = setTimeout(()=>{
                fn()
                timer = null
                firstTime = !leading ? 0 : new Date().getTime()
            },remainTime)
        }
    }
    _throttle.cancel = function(){
        if(timer){
            clearTimeout(timer)
            timer = null
        }
    }
    return _throttle
}