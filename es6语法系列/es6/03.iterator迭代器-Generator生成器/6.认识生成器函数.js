/**
 *   生成器函数：
 *     1. 它可以控制函数内容的执行 或者 暂停， 写法上 函数和函数名之间加*，函数内部可以用yield控制函数的执行
 *     2. 它是特殊的迭代器，所以它的返回值，可以调用nex函数,也会返回一个对象 {done: false, value}
 * 
 */

function* foo(){
    console.log('11111')
    yield
    console.log('22222')
    yield
    console.log('33333')
    yield
}

const fooName = foo()
console.log(fooName.next())   //{ value: undefined, done: false }
console.log(fooName.next())   //{ value: undefined, done: false }
console.log(fooName.next())  //{ value: undefined, done: false }
console.log(fooName.next())  //{ value: undefined, done: true }