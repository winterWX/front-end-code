/**
 *  生成器函数  throw 方法
 *  
 */

function* foo(){ 
    try {
        yield '1111' 
    } catch (error) {
       console.log('出错了',error)  // 有捕获 就会继续 执行下面的代码
       yield 'abc' // 是可以生效的
    }
    
    yield '222'

    yield '333'
}

const fooName = foo(10)    
console.log(fooName.next())  
console.log(fooName.throw('出错了')) 
console.log(fooName.next())
console.log(fooName.next())