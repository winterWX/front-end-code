

/**
 * 看原型对象方法，Promise.prototype是不可枚举的，所以打印对象是看不到的
 * console.log(Object.getOwnPropertyDescriptors(Promise.prototype)) 
*/

/**
 *  .then() 的使用方法一
*/
 
const newPromise = new Promise((resolve,reject)=>{
    resolve('aaaa')
})

newPromise.then(res=>{
    console.log('res==',res)  // resolve 时就会走到then里
    /**
     *  then里默认时有返回值的
     *  什么不写时默认返回值时  return undefined
    */
})

// 多个.then方法调用 都会得到 resolve出来的值的
newPromise.then(res=>{
    console.log('res==',res)  // 结果 ：'aaaa'
})

newPromise.then(res=>{
    console.log('res==',res)  // 结果 ：'aaaa'
})