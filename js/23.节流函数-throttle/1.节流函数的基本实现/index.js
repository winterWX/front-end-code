function throttle(fn,interval){
    let firstTime = 0 //首次开始时间是0
    const _throttle = function(...args){
        let nowTime = new Date().getTime()
        // 间隔时间计算
        let remainTime = interval-(nowTime - firstTime)
        // 间隔时间 已经到了 开始执行
        if(remainTime <= 0){
            fn.apply(this,args)
            firstTime = nowTime // 执行完让首次执行时间变为当前执行时间，进行下个阶段的计算
        }
    }
    return _throttle
}


