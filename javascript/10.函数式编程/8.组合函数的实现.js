function add(num){
   return num + 2
}

function square(num){
    return num ** 2
}
 
function composeComponent(m,n){
    return function(count){
        return n(m(count))
    }
}

var fn = composeComponent(add,square)  //先加后平方
fn(10)