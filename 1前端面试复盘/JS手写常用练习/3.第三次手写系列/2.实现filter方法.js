Array.prototype.wxFilter = function(fn){
   if(typeof fn !== 'function') return
   var thisArg = this
   if(!Array.isArray(thisArg)) return
   var result = []
   var len = thisArg.length
   for(var i= 0 ; i < len; i++ ){
        if(fn(thisArg[i])){
           result.push(thisArg[i])
        }
   }
   return result
}