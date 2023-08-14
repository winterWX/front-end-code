
function decounce(fn,daley, immediate){
	let trime = null
	let isInvoke = false
	const _decounce = function(...res){
		if(immediate && !isInvoke){
		    fn.apply(this,res)
			isInvoke = true
		}
		console.log('trime===',trime)
		trime && clearTimeout(trime)
		trime = setTimeout(()=>{
			fn.apply(this,res)
			clearTimeout(trime) 
			trime = null
			isInvoke = false
		}, daley)
	}
	_decounce.cancel = function(){
		if(trime){
			clearTimeout(trime)
			trime = null
		}
	}
	return _decounce
} 