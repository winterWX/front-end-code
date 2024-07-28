/**
 *  函数是一等公民，做为参数的使用
 */

/**  案例一 */
function foo(fn){
    fn()
}
function bar(){
    console.log('bar')
}
foo(bar)


/** 案例二 */
function calc(num1,num2,calcFn){
    console.log(calcFn(num1,num2))
}

function add(num1,num2){
    return num1 + num2
}

calc(10,100,add)