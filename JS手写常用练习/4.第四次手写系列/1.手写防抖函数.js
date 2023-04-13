function debounce(fn, delay, immediate = true) {
    let timer = null
    let isInvoke = false
    function _debounce(arg) {
        if (immediate && !isInvoke) {
            fn.apply(this, arg)
            isInvoke = true
        } else {
            timer && clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(this, arg)
                isInvoke = false
            }, delay)
        }
    }
    _debounce.cancel = function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
            isInvoke = false
        }
    }
    return _debounce
}