/**
 *  生成器函数，传参
 *  
 */

function* foo(first){ 
    let values = first* 2    /** 这里 first 的默认操作是 , first = yield */
    const seconds = yield values 

    const three = yield seconds * 2

    console.log('33333')
    yield three + 10
}

const fooName = foo(10)    // 首次参数会被用到第一 yield 之前的代码中
console.log(fooName.next())  
console.log(fooName.next(100)) // 这里是将 100 做为第一 yield 的返回值了，然后第二个yield之前的代码就可以被用到了 
console.log(fooName.next(10000))
console.log(fooName.next())