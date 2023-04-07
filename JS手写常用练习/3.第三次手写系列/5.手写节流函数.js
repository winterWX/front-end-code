function throttle(fn,daley, option) {
    const { leading, trading } = option
    let nowTime = new Date().getTime()
    let firstTime = 0
    function _throttle(...res){
        let merging = daley - (nowTime - firstTime)
        if (merging <=0) {
            fn.apply(this,res)
        }
    }

    return _throttle
}









