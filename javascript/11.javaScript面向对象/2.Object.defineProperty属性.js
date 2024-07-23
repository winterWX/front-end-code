//Object.defineProperty(目标对象,属性值,属性描述)

var test = {
    name:'li san',
    age: 20
}

Object.defineProperty(test,'address',{
    value:'北京',
    configurable: false,  // false时 该属性不可被删除，也不可被重新赋值修改。为true时则反之
    enumrable: false,    //  false时，该属性是不可以不枚举的。 为true时则反之
    writable: false     // false时，该属性是不可以被重新赋值的。 为true时则反之
})

//测试 configurable 是否可以被修改   结论： 不可以
// Object.defineProperty(test,'address',{
//     value:'北京22',
//     configurable: true,
// })

delete test.address
console.log('===',test.address)



Object.defineProperty(test,'address') // address的默认属性描述符
// {
//     value: undefined,
//     configurable: false,  
//     enumrable: false,    
//     writable: false 
// }


// test.name 属性的默认值是
Object.defineProperty(test,'name')
// {
//     value:'li san',
//     configurable: true,  
//     enumrable: true,    
//     writable: true     
// }