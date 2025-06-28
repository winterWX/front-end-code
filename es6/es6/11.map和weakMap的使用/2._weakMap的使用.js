/**
 * WeakMap
 *   1.weakMap的key必须是引用类型
 *   2.weakMap是弱引用，map是强引用
 * 
*/

const  weakMap = new WeakMap();
weakMap.set({},'11');

/**
 * 
 *  方法
 *  set
 *  get(key)
 *  delete(key)
 *  has(key)
 *  不能遍历
 * 
*/

/**
 *   map 和 weakMap的区别
 *   weakMap是弱引用，所以WeakMap的键是不可枚举的
 */