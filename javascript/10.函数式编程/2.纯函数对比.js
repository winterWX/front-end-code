function foo(obj){
    obj.age = 30 
    return obj
}
var obj = { name: 'hello', age:100 }
var result = foo(obj)
console.log(result,obj)

// 结论：这不是一个纯函数， 因为函数改变了外面的对象


function bar(obj1){
    // 重新定义了对象
    return {
        ...obj1,
        age: 40
    }
}
var obj1 = { name: 'hello', age:100 }
var result1 = bar(obj1)
console.log(result1,obj1)
// 结论：这是一个纯函数， 因为函数内部纯新定义了一个新的对像



/**
 *  纯函数的优势
 *  1.编写函数开发时只关心函数的入参和返回值，实现函数自身的逻辑
 *  2.会减少代码开发中问题，利于维护
 *  3.react中要求函数式组件像纯函数一样，保护props不被修改
 * 
 */