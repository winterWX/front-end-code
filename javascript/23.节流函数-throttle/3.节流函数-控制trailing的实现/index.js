function throttle(fn,interval,option){
    const { leading, trailing } = option
    let firstTime = 0 //首次开始时间是0
    let timer = null
    const _throttle = function(...args){
        let nowTime = new Date().getTime()
        // 控制首次是否要执行, 必须考虑是不是 是首次 firstTime == 0 就是首次
        if(firstTime == 0 && leading == false ){ firstTime = nowTime }
        let remainTime = interval-(nowTime - firstTime)
        // 在时间节点正好有时间触发
        if(remainTime <= 0){
            // 如果在节点执行时有定时器，清除定时器，否则会执行两次。这里是节点执行，就不需要有定时器
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            fn.apply(this,args)
            firstTime = nowTime
            return  // 如果等的时候时间节点正好有事件执行，直接 return, 就再不需要加定时器了 
        }
        // 如果trailing === true 就说明在某个阶段的中间停下来了，那停下输入了，我就会要执行了事件了

        if(trailing && !timer){  // !timer 表示没有定时器的时候我才加 setTimeOut 延迟执行，只需要加一次定时器
            timer = setTimeout(()=>{
                timer = null
                firstTime = !leading ? 0 : new Date().getTime()
                fn.apply(this,args)
            },remainTime) //等间隔时间一到我就立马执行
        }
    }
    // 取消功能
    _throttle.cancel = function(){
        timer && clearTimeout(timer)
        timer = null 
    }
    return _throttle
}
