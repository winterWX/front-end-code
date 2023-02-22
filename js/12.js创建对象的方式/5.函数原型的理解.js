function Foo(){

}

// 1.函数作为对象，有一个隐式原型 __proto__

// 2.作为函数，函数本身有一个prototype显式原型的属性，prototype：{ constructor: foo(函数本身)}

/**
 * 3.对象隐式原型和显式原型的关系
 *   1》 new Foo()时，会在内存里生成一个对象
 *   2》 生成的对象里的隐式原型 会被赋值为函数的显示原型
 *   3》 然后 把这个对象赋值this
 *   4》 再将这个对象返回出去
 */

// function foo(){
//     //1.空对象
//     var start = {
//         // 2.指向
//         __proto__:  foo.prototype
//     }
//     //3.赋值给this
//     this = start
//     // 4.进行返回
//     return start
// }

//结论：
var p1 = new Foo()
var p2 = new Foo()

// 指向了同一个原型对象
console.log(p1.__proto__ === Foo.prototype)  // true
console.log(p2.__proto__ === Foo.prototype)  // true

console.log(p2.__proto__ === p1.__proto__)   // true

// 当给同一个函数new出来的两个对象，其中的一个对象隐式原型添加属性时， 另一个也可以访问到
p1.__proto__.test = '测试'  // 等价于  Foo.prototype.test = '测试',所以当 p2访问属性时就可以访问到了
console.log('p2对象上的属性',p2.test)