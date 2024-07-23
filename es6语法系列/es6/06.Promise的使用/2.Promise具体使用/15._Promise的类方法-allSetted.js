/**
 *    allSettled：
 *    调用多个Promise
 *    1. 都会走到.then里。返回一个包含多个对象的数组，每个对象包含Promise的状态(fulfilled/rejected)和 成功的返回值或者失败的信息(value/reason)
 *    
 *    // 注意点：
 *    2. 多个Promise 如果都是reject, 也不会走到.catch里。没有catch
 *  
*/

const p1 = new Promise((resolve,reject)=>{
    resolve('p1--------')
})

const p2 = new Promise((resolve,reject)=>{
    reject('p2--------')
})

const p3 = new Promise((resolve,reject)=>{
    reject('p3--------')
})


Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log('res=====',res)  /**
          都成功会将成功的结果放到数组里 []
          [
             {status: fulfilled, value: 'p1----'},
             {status: rejected, reason: 'p2----'},
             {status: rejected, reason: 'p3----'}
          ]
    */ 

}).catch((err)=>{
    console.log('err=====',err)  // 只会返回错误的Promise结果
})