/**
 *    all：
 *    调用多个Promise
 *    1.只要有一个是 reject,那么结果就是 拒绝的状态,就会再catch里报出错误, 
 *    当遇到第一promise是reject就会直接返回错误值，下面的promise就不会执行
 *    
 *    2.如果都成功了，就会依次把结果放到 数组里，返回给.then
 *  
 */

const p1 = new Promise((resolve,reject)=>{
    reject('p1--------')
})

const p2 = new Promise((resolve,reject)=>{
    resolve('p2--------')
})
const p3 = new Promise((resolve,reject)=>{
    reject('p3--------')
})


Promise.all([p1,p2,p3]).then((res)=>{
    console.log('res=====',res)   // 都成功会将成功的结果放到数组里
}).catch((err)=>{
    console.log('err=====',err)  // 只会返回错误的Promise结果
})