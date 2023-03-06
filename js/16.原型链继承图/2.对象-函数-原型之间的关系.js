var test = { name: '111' }

// 1.讨论1
/**
 *  test字面量对象，其实是由new Object() 
 *  
 *  1.做为对象，test有一个__proto__: 隐式原型
 *  2.new Object() 会将 Object.prototype 赋值给 test.__proto__,
 *      test.__proto__ === Object.prototype
*/

function Foo(){}  // 相当于  var Foo = new Function()

// 2.讨论2

/**
 *   1》 Foo是一个函数，它就会有一个显式原型对象：Foo.prototype.
 *       # Foo.prototype来自于哪里？
 *          # 函数创建时，js引擎会给函数创建一个原型对象 Foo.prototype：{constructor: Foo}
 * 
 *   2》 Foo是一个对象，它有一个隐式原型对象：Foo.__proto__
 *       # Foo.__proto__来自于哪里？
 *          # new Function() 生成的对象Foo, Foo.__proto__ === Funtion.prototype
 *          Funtion.prototype: {construcor: Funtion}
 */

  console.log(Foo.prototype === Foo.__proto__) //false
  console.log(Foo.prototype.constructor) // [Function Foo]
  console.log(Foo.__proto__.constructor) // [Function Function]
