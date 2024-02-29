/**
 * 
 *   typeof 是判断数据类型的
 *   可判断  number Boolean string function undefined object Bigint Symbol
 *   但是判断 复杂数组类型是  返回的都是 Object
 *   如判断  null  Array  object  new实例化的构造函数  返回的都是 object
 *   由此引出了 instanceof
 * 
 *   instanceof  可以判断 对象是谁的实例 
 * 
 *   如 （person.prototype instanceof  person）
 * 
 */


console.log(typeof ([12, 34]))  // Object
console.log([12, 34] instanceof Array)   // true
