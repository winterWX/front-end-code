function  foo(){
    
}

console.log('打印函数原型上的所有属性', Object.getOwnPropertyDescriptors(foo.prototype))

// 打印结果:  foo.prototype  有一个constructor属性

// {
//     constructor: {
//       value: [Function: foo],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     }
//   }

console.log('函数的名称', foo.prototype.constructor.name)


// 给原型添加多个属性
foo.prototype = {
   name:  'hello',
   age: 30,
   addres: '北京市'
}

// 由于缺少constructor,所以需要要Object.definedProperty进行添加
Object.defineProperty(foo.prototype,'constructor',{
    enumerable: false,
    configurable: true,
    writable: true,
    value: foo
})