function* foo(){
    console.log('11111')
    yield

    return  //如果中间出现 return，执行完第一个 yield，再次next时就不会执行， 等于返回值对象的结果已经执行完了 { done: true, value: undefined}
    console.log('22222')
    yield
    console.log('33333')
    yield
}

const fooName = foo()
console.log(fooName.next())  /** 每个.next()，按照顺序只会执行 每一个yield 之前的代码  */ 
console.log(fooName.next())  
console.log(fooName.next()) 
console.log(fooName.next())  