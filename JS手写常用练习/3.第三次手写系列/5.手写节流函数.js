
// 封装节流函数
function throttle(fn, interval, option) {
    const { leading, trailing } = option
    let nowTime = new Date().getTime()
    let firstTime = 0
	let trime = null
    function _throttle(...res){
		// 判断首次是不是要执行
		if(!leading && firstTime === 0) { firstTime = nowTime}
	    // 计算间隔时间
        let merging = interval - (nowTime - firstTime)
        if (merging <= 0) {
			if(trime){
				clearTimeout(trime)
				trime = null
			}
            fn.apply(this, res)
			firstTime = nowTime  // 重新开始计算时间
			// 到频率点上了执行完，直接return
			return
        }
		
		// 放置一个事件，等待执行
		if(!trime && trailing){
			trime = setTimeout(()=>{
				fn.apply(this, res)
				clearTimeout(trime)
				trime = null
				firstTime = !leading ? 0 : new Date().getTime()
			}, merging)
		}
    }
	_throttle.cancel = function(){
		if(trime){
			clearTimeout(trime)
			trime = null
		}
	}
    return _throttle
}









