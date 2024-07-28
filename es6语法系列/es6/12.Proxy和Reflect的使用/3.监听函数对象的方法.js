/** 对函数对象的监听 */

function foo(){
    console.log('this===',this)
}

let newProxy = new Proxy(foo,{
    // apply
    apply(target,thisArg,argArray){
        console.log('监听apply函数的调用')
        return target.apply(thisArg,argArray)
    },
    //construct 构造函数
    construct(target,argArray,newTarget){
        console.log('监听实例化函数的调用')
        return new target(...argArray)
    }
})

newProxy.apply({bar:111},[12,34])
console.log(new newProxy('n','m'))