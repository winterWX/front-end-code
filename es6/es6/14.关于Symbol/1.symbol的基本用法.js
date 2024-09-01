/**
 *  由于js对象的key 是字符串，
 *  对象间合并可能会造成，名字冲突
 *  
 *  为了保证属性名是独一无二的，使用Symbol
 * 
 * 
 *  由此： 对象的属性名可以是字符串，也可以是Symbol类型
 * 
 *  1. Symbol值 是 由Symbol函数函数创建的
 *  2. Symbol前不能用 new , 因为Symbol是一个原始值，而不是一个对象
 * 
 * 
 */
let s1 = Symbol('aa')
console.log( typeof s1 === 'Symbol')