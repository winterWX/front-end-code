
var test = {
   title: '我是一个测试对象'
}

var newObj = Object.create(test)  // 相当于 newObj.__proto__ === test
 
var newObj1 = Object.create(test,{   // 添加时只能写属性描述符
    address:{
        configurable: true,
        enumerable:  true,
        writable: true,
        value: '北京市'
    }
})

console.log(test)
console.log(newObj1.address)   // 直接加到原型创建的对象上了，不会加到之前的对象

//  判断属性在自己身上，还是原型上 , hasOwnProperty 判断
console.log(newObj1.hasOwnProperty('address'))  //true
console.log(newObj1.hasOwnProperty('title'))  // fase
console.log(test.hasOwnProperty('title'))  // true


// in 操作符：属性存在对象上 或  原型中，都返回true
console.log('address' in newObj1) //true
console.log('title' in newObj1) //true