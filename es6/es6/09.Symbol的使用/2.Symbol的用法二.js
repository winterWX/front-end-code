// symbol作为对象属性名时，遍历对象的时候
// 该属性不会出现在 for...in,for...of循环中
// 也不会被 Object.keys() Object.values(), Object.getOwnPropertyNames(),Object.stringify()

// 只有通过Object.getOwnPropertySymbols()可以获取，通过Reflect.ownKeys()

let a = Symbol('a')

Symbol.for(a)    // 用于比较两个symbol的值
Symbol.keyFor() // 用于返回一个symbol的key



