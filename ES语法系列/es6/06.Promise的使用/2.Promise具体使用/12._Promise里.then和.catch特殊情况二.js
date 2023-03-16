
/** 测试  .catch 里 return Promise  是 reject 的情况 */

const testPromise = new Promise((resolve,reject)=>{
    reject('-----')
})

new Promise((resolve,reject)=>{
    reject(2222)
}).then(res=>{
    console.log('res=====', res)
}).catch(err=>{
   console.log('err======', err)
   /**
    *  .catch 里也是有返回值的
    *  
    *  可以return一个 基本数据
    *  也可以return 一个对象
    *  return 一个函数
    *   
    */
    return testPromise /**
    
      这里 return 也是用了 new Promise((resolve,reject)=>{
         resolve(testPromise)
      })进行了包装   ----  注意点： 这里包装和.then里  return 的包装啊是一样的

    如果是 resolve(resolve('-----')) 就会走到下面的.then里
    如果是 resolve(reject('-----')) 就会走到下面的.catch里

    */
}).then(res2=>{
    console.log('catch里的return', res2)
}).catch(err=>{
    console.log('捕获第一个catch里的返回值', err)
})