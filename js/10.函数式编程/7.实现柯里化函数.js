function wxCurrying(fn){
    // 函数柯里化后返回一个新的函数
    return function curryingOut(...arg){
        // 函数调用所传的参数和函数本身的参数是否相等，如果相等就直接调用函数
        if(arg.length >= fn.length){
            return fn.apply(this,arg)
        }else{
            // 传递的参数没有到函数本身需要的参数，就重新返回一个函数
            return function curryingInner(...res){
                //递归方式重新调用curryingOut,来检查函数的个数是否达到了 
                return curryingOut.apply(this,[...arg,...res])
            }
        }
    }
}

function sum(x,y,z,q,w){
    return x + y + z + q + w
}

var fn = wxCurrying(sum)

// fn(1)(2)(3)(4)(5)
console.log(fn(1)(2)(3)(4)(5))