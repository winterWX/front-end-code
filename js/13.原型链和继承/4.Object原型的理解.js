
var obj = {
    name: 'he he',
    age: 30
}

console.log(obj.address)    // undefined, 由此可见是有顶层的，在顶层没有找到就返回undefined

// 顶层是什么 ？
console.log(obj.__proto__)  // [Object: null prototype] {}
console.log(obj.__proto__.__proto__) // null ----> 说明 obj.__proto__上已经没有__proto__了。 [Object: null prototype] {}就是顶层

// 字面量创建对象的方式等价于 new Object() 创建对象
// 研究用new Object() 创建对象，隐式原型__proto__和显式原型prototype的表现形式

var obj2 = new Object()

/***
 *   表现形式：
 *      1.new Object()会在内存里创建一个对象
 *      2.将这个对象赋值给this
 *      3.将Object()函数的prototype赋值给对象的隐式原型
 *      4.执行代码体
 *      5.将对象返回
 */

// 最终
obj2.__proto__ === Object.prototype //指向
console.log(obj2.__proto__)  // [Object: null prototype] {}
console.log(Object.prototype) // [Object: null prototype] {}
console.log('顶层',obj2.__proto__ === Object.prototype)  //结论： 对象原型链的顶层是Object


// 查看 Object.prototype里的属性描述符
console.log('查看 Object.prototype里的属性描述符',Object.getOwnPropertyDescriptors(Object.prototype))

// constructor: {
//     value: [Function: Object],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   __defineGetter__: {
//     value: [Function: __defineGetter__],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   __defineSetter__: {
//     value: [Function: __defineSetter__],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   hasOwnProperty: {
//     value: [Function: hasOwnProperty],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   __lookupGetter__: {
//     value: [Function: __lookupGetter__],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   __lookupSetter__: {
//     value: [Function: __lookupSetter__],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   isPrototypeOf: {
//     value: [Function: isPrototypeOf],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   propertyIsEnumerable: {
//     value: [Function: propertyIsEnumerable],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   toString: {
//     value: [Function: toString],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }