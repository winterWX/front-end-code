function wxComponseComponent(...fn){
   var len = fn.length
   for(var i = 0; i < len; i++){
      if(typeof fn[i] !== 'function'){
        throw new TypeError('not a function')
      }
   }
   
   return function(...arg){
      var index = 0
      var result = len ? fn[index].apply(this,arg) : arg
      while(++index < len){
         result = fn[index].call(this,result)
      }
      return result
   }
}


function add(num){
   return num + 2
}

function square(num){
    return num ** 2
}

var fn = wxComponseComponent(add,square)
fn(10,20,30)

console.log(fn(10,20,30))