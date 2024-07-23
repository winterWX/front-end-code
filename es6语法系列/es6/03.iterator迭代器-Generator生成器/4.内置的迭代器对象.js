
const arr = [12,34,5456,45,6756,68787]  // new Array(12,34,5456,45,6756,68787) 创建的

// 1.数组是有 symbol.iterator,所以可以用for...of
console.log('array---Symbol.iterator',arr[Symbol.iterator])
const iteratorRes = arr[Symbol.iterator]()
console.log(iteratorRes.next())
console.log(iteratorRes.next())
console.log(iteratorRes.next())


// 2.Set类也是有Symbol.iterator的
let newSet = new Set()
newSet.add(10)
newSet.add(100)
newSet.add(10000)

console.log('Set---Symbol.iterator',newSet[Symbol.iterator])
const iter2 = newSet[Symbol.iterator]()

console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())

/**
 *  3.展开运算符 也是借助  数组的 可迭代对象实现的
 *  
 *  先把数组每一项拿出来，然后添加到新的数组里
 * 
*/

// 4.Promise.all()里的值 也是有 Symbol.iterator函数的
