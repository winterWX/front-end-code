function* foo(){
    let values = '1111'
    yield values  // yield 后面的值会被当做，next() 后的 返回对象的value值 { done: false,  value: '1111'}
    console.log('22222')
    yield '22222'
    console.log('33333')
    yield '33333'
}

const fooName = foo()
console.log(fooName.next())  // { done: false,  value: '1111'}
console.log(fooName.next())  // { done: false,  value: '2222'}
console.log(fooName.next())  // { done: false,  value: '3333'}
console.log(fooName.next())  // { done: true,  value: undefined}