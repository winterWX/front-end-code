// WeakSet 的用法

/**
 * 1.WeakSet只能存放引用类型，不能存放基本类型
 * 2.weakSet是一个弱引用，如果没有其他变量引用对象，那么这个对象就会被GC回收
 * 3.weakSet只有 add delete has方法，不能使用 forEach 和 for...of 遍历。 weakSet只能存，不能取
 * 
 */

const test = new WeakSet()

const obj = {name:'11'}

// add
test.add(obj)

// has

// delete

console.log('test===',test)   // { <item  unknown >} 是因为不能遍历才会有这样的结果