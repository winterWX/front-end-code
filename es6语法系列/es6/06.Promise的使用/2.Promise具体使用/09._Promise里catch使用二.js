/*** Promise里 catch 的基本使用 */

let newPromise = new Promise((resolve,reject)=>{
    //reject()
    resolve('00')
})

// 连续多次调用
newPromise.then(res=>{
    /**
     * return Promise时
     * 
     *  return new Promise((resolve,reject)=>{
     *       reject(new Promise((resolve,reject)=>{
     *           reject('then 里的异常')
     *       }))
     *  })
     * 
     */

    //return new Promise((resolve,reject)=>{ reject('then 里的异常') })

    // return 对象时 ----- return new Promise((resolve,reject)=>{ reject(对象) })
    return {
        name:'wx',
        then: function(resolve,reject){
            reject(this.name)
        }
    }
})

/** 
 *  这里 .catch的特殊点
 *  
 *  优先会捕获 newPromise 里executor里异常，
 *  如果 newPromise 里executor里 没有异常
 *  就会捕获.then里的异常 
 * 
 *  .then返回的是Promise  ---- 由 .then方法里   return 的Promise最里层 reject 决定 err的值
 *  .then返回的是对象  ---- 由 .then方法里  return 的 then方法里的 reject 决定 err的值
 * 
 */

.catch(err=>{
    console.log('catch 的基本使用-fail ------ 2',err)  
})
