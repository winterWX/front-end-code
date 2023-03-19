/**
 *  生成器函数，return 方法
 *  
 */

function* foo(){ 
    console.log('111111')
    yield '111111' 

    console.log('222222')
    yield '222222'

    console.log('33333')
    yield '33333'

    console.log('44444')
    yield '44444'
}

const fooName = foo()    
console.log(fooName.next())  
console.log(fooName.return('我是return终结结果'))   /**
   此时调用return 会将return的值做为最后一次的 返回值的结果。  第一次next()调完后，return做为终结，后面的yield 不会再执行
   此时的结果
    {done: false, value: '1111'}
    {done: true,  value: '我是return终结结果'}

*/
console.log(fooName.next(10000))
console.log(fooName.next())