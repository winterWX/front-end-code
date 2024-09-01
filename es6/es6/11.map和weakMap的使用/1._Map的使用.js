/**
 *  Map的使用
 *  
 *  1.map可以用引用类型作为key,也可以用基本类型, ES6之前是不允许的
 * 
*/

// 1.map的创建
const map = new Map()

const obj1 = { name:'111', age:20}
const obj2 = { name:'222', age:40}

map.set(obj1,'aaa')
map.set(obj2,'bbb')
console.log('map====',map)


const map2 = new Map([[{flag: '1'},'ccc'],[{flag: '2'},'ddd']])  // 需要传entris
console.log('map2===',map2)

// map常见的方法

/**  
 *  size // 获取长度
 *  set(key,value)
 *  get(key)
 *  has(key)
 *  delete(key)
 *  clear()
 *  可以遍历  forEach, for...of
 * 
 */