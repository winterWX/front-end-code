function throttle(fn,interval,option){
    const { leading, trailing } = option
    let firstTime = 0 //首次开始时间是0
    const _throttle = function(...args){
        let nowTime = new Date().getTime()
        // 控制首次是否要执行, 必须考虑是不是首次 firstTime
        if(!firstTime && !leading){ firstTime = nowTime }
        let remainTime = interval-(nowTime - firstTime)
        if(remainTime <= 0){
            fn.apply(this,args)
            firstTime = nowTime 
        }
    }
    return _throttle
}


