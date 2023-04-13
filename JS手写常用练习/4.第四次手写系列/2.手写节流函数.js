function throttle(fn, delay, option) {
    let { leading = true, trading = true } = option
    let timer = null
    let firstTime = 0
    let nowTime = new Date.getTime()
    function _throttle(arg) {
        if (!leading && firstTime === 0) {
            firstTime = nowTime
        }
        let marginTime = delay - (nowTime - firstTime)
        if (marginTime <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            fn.apply(this, arg)
            firstTime = nowTime
            return
        }
        if (trading && !timer) {
            timer = setTimeout(function () {
                fn.apply(this, arg)
                clearTimeout(timer)
                timer = null
                firstTime = !leading ? 0 : new Date().getTime()
            }, marginTime)
        }
    }
    _throttle.cancel = function () {
        timer && clearTimeout(timer)
        timer = null
        firstTime = 0
    }
    return _throttle
}





