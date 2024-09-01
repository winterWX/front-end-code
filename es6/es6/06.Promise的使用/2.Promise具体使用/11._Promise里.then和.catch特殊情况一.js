
/** 测试  .then 里 return Promise  是 reject 的情况 */


const testPromise = new Promise((resolve,reject)=>{
    reject('-----')
})

new Promise((resolve,reject)=>{
    //resolve('111')
    resolve(2222)
}).then(res=>{
    console.log('res=====', res)
    return testPromise  /**
      此时return的是  new Promise((resolve,reject)=>{
           resolve(
                new Promise((resolve,reject)=>{
                    reject('-----')    // 此时就会被catch捕获到，如果是resolve('----')就会走到下一个.then里
                })
           )
      })
    */
}).then(res2=>{
    console.log('res2=====', res2)
}).catch(err=>{
   /**
    *  .catch 这里捕获异常的顺序是
    *   
    *   1. 先捕获executor函数里的异常
    *   2. 如果第一步executor函数里没有异常就会捕获第一个.then里的异常，依词类推
    */

    console.log('err======', err)
})