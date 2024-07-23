function Person(){}

var p = new Person()

/**
 * 实例对象p的原型链  p.__proto__ === Person.prototype:{
 *      constructor: Person
 *      __proto__:  Object --->  Object.prototype.__proto__ === null
 * }
 * 
 */

// instanceof 判断  原型链上是否有某个对象

console.log(p instanceof Person)   // true
console.log(p instanceof Object)  // true